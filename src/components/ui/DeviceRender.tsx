'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DeviceRender() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 8;
        camera.position.y = 2;
        camera.lookAt(0, 0, 0);

        // Create a sleek, pebble-like monolith
        const shape = new THREE.CapsuleGeometry(1.5, 2, 32, 64);
        const material = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.2,
            transmission: 0.3,
            thickness: 1,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
        });

        const monolith = new THREE.Mesh(shape, material);
        monolith.rotation.x = -Math.PI / 10;
        scene.add(monolith);

        // Add a glowing ring at the base
        const ringGeometry = new THREE.TorusGeometry(1.8, 0.02, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = -2;
        scene.add(ring);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 100);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const softLight = new THREE.PointLight(0x3b82f6, 50);
        softLight.position.set(-5, -2, 2);
        scene.add(softLight);

        const animate = () => {
            requestAnimationFrame(animate);

            monolith.rotation.y += 0.005;
            ring.rotation.z += 0.01;

            // Pulse effect
            const time = Date.now() * 0.002;
            ringMaterial.opacity = 0.5 + Math.sin(time) * 0.3;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            if (!containerRef.current) return;
            const w = containerRef.current.clientWidth;
            const h = containerRef.current.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="w-full h-full" />;
}
