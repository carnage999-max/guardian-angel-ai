import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, useCase } = await req.json();
    console.log('Sending email for:', { email, useCase });

    const contactTo = process.env.CONTACT_TO ? process.env.CONTACT_TO.split(',') : ['info@guardianangeldevice.com'];
    // Resend trial/onboarding mode often requires sending from onboarding@resend.dev
    const emailFrom = 'onboarding@resend.dev';

    const { data, error } = await resend.emails.send({
      from: `Guardian Angel AI <${emailFrom}>`,
      to: contactTo,
      subject: `🚨 NEW PILOT INQUIRY: ${useCase.toUpperCase()}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f9fc;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f6f9fc; padding: 40px 0;">
              <tr>
                <td align="center">
                  <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #06080c; padding: 40px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">Guardian Angel AI<span style="font-size: 12px; vertical-align: top;">®</span></h1>
                        <p style="color: #3b82f6; margin: 10px 0 0 0; font-size: 12px; font-weight: bold; letter-spacing: 3px; text-transform: uppercase;">Institutional Safety Intelligence</p>
                      </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px;">
                        <h2 style="color: #06080c; margin: 0 0 20px 0; font-size: 20px;">New Pilot Program Request</h2>
                        <p style="color: #4a5568; line-height: 1.6; margin-bottom: 30px;">
                          A new inquiry has been submitted via the production portal. The following institution is requesting evaluation for our privacy-first awareness infrastructure.
                        </p>
                        
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; padding: 24px;">
                          <tr>
                            <td style="padding-bottom: 16px;">
                              <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Requesting Entity</div>
                              <div style="font-size: 16px; color: #06080c; font-weight: 500;">${email}</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div style="font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Deployment Environment</div>
                              <div style="font-size: 16px; color: #3b82f6; font-weight: bold;">${useCase}</div>
                            </td>
                          </tr>
                        </table>
                        
                        <div style="margin-top: 40px; text-align: center;">
                          <a href="mailto:${email}" style="background-color: #06080c; color: #ffffff; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">Initiate Response</a>
                        </div>
                      </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">© 2026 Guardian Angel AI PBC. High-Fidelity Privacy Infrastructure.</p>
                        <p style="color: #94a3b8; font-size: 10px; margin: 8px 0 0 0;">CONFIDENTIAL OFFICIAL COMMUNICATION</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
