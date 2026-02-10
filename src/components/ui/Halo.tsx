'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Halo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !canvasRef.current) return;

        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const canvas = canvasRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        camera.position.z = 15;

        // Create a large, soft glow field
        const geometry = new THREE.SphereGeometry(10, 64, 64);
        const material = new THREE.MeshBasicMaterial({
            color: 0x3b82f6, // Institutional Blue
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
        });

        const blob = new THREE.Mesh(geometry, material);
        scene.add(blob);

        const geometry2 = new THREE.SphereGeometry(12, 64, 64);
        const material2 = new THREE.MeshBasicMaterial({
            color: 0x1d4ed8, // Deep Blue
            transparent: true,
            opacity: 0.1,
            blending: THREE.AdditiveBlending,
        });
        const blob2 = new THREE.Mesh(geometry2, material2);
        blob2.position.set(5, -5, -5);
        scene.add(blob2);

        const clock = new THREE.Clock();
        let animationFrameId: number;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Fluid, slow-drift movement for the entire page background
            blob.position.x = Math.sin(elapsedTime * 0.2) * 4;
            blob.position.y = Math.cos(elapsedTime * 0.25) * 3;

            blob2.position.x = Math.sin(elapsedTime * 0.15 + 2) * 6;
            blob2.position.y = Math.cos(elapsedTime * 0.2 + 1) * 4;

            // Gentle distortion scale
            const pulse1 = 1 + Math.sin(elapsedTime * 0.3) * 0.1;
            blob.scale.set(pulse1, pulse1, pulse1);

            const pulse2 = 1 + Math.cos(elapsedTime * 0.25) * 0.12;
            blob2.scale.set(pulse2, pulse2, pulse2);

            renderer.render(scene, camera);
        };

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            geometry2.dispose();
            material2.dispose();
            renderer.dispose();
        };
    }, [isMounted]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            {/* CSS Ambient Base Glows */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] opacity-30 blur-[150px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)' }}
            />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] opacity-20 blur-[150px] rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(29, 78, 216, 0.4) 0%, transparent 70%)' }}
            />

            {/* Three.js Dynamic Canvas */}
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-40 mix-blend-screen"
            />
        </div>
    );
}
