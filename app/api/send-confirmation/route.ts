import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { bookingId, patientName, email, phone, option, date } = await request.json();

    if (!email || email === 'N/A') {
      return NextResponse.json({ success: true, message: 'No customer email provided' });
    }

    // Configure SMTP Transporter (Using GoDaddy Webmail or custom SMTP env vars)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.secureserver.net',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'support@balancedplate.co.in',
        pass: process.env.SMTP_PASSWORD || '',
      },
    });

    const googleFormLink = 'https://docs.google.com/forms/d/1K03_NXHtmo-_8kl_iqrTuHU4BZMT9aU6qRyqt9P7Ewk/viewform';
    const whatsappLink = 'https://wa.me/918796889242';

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF8F5; border: 1px solid #EBE3D8; border-radius: 16px; overflow: hidden;">
        
        <!-- Header -->
        <div style="background-color: #0E0E0E; padding: 24px; text-align: center;">
          <h1 style="color: #FFFFFF; font-size: 20px; margin: 0; letter-spacing: 2px;">BALANCED PLATE NUTRITION CLINIC</h1>
          <p style="color: #C8A870; font-size: 12px; margin: 4px 0 0 0;">Nutritionist Simran Gulshan</p>
        </div>

        <!-- Body -->
        <div style="padding: 24px; color: #171717;">
          <h2 style="color: #8C6D34; font-size: 18px; margin-top: 0;">Appointment Confirmed!</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #4A4A4A;">
            Dear <strong>${patientName}</strong>,<br/>
            Thank you for booking your consultation. Your 1-on-1 session with <strong>Nutritionist Simran Gulshan (M.Sc. Food & Nutrition)</strong> has been successfully scheduled.
          </p>

          <!-- Booking Summary Box -->
          <div style="background-color: #FFFFFF; border: 1px solid #EBE3D8; border-radius: 12px; padding: 16px; margin: 20px 0;">
            <table style="width: 100%; font-size: 13px; color: #333; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #777;">Booking Ref:</td>
                <td style="padding: 6px 0; font-weight: bold; color: #8C6D34; text-align: right;">${bookingId}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #777;">Consultation Plan:</td>
                <td style="padding: 6px 0; font-weight: bold; text-align: right;">${option}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #777;">Date:</td>
                <td style="padding: 6px 0; font-weight: bold; text-align: right;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #777;">Phone:</td>
                <td style="padding: 6px 0; font-weight: bold; text-align: right;">${phone}</td>
              </tr>
            </table>
          </div>

          <!-- Step 2 Google Form Callout -->
          <div style="background-color: #F5F0E8; border: 1px border-[#E8DFD5]; border-radius: 12px; padding: 16px; text-align: center; margin-bottom: 24px;">
            <h3 style="color: #8C6D34; font-size: 14px; margin: 0 0 8px 0;">📋 Step 2: Complete Your Diet Assessment Form</h3>
            <p style="font-size: 12px; color: #555; margin: 0 0 14px 0;">Please fill out your health history and diet preferences so Nutritionist Simran Gulshan can review your details during your consultation call.</p>
            <a href="${googleFormLink}" target="_blank" style="background-color: #8C6D34; color: #FFFFFF; text-decoration: none; font-size: 13px; font-weight: bold; padding: 12px 24px; border-radius: 8px; display: inline-block;">
              Fill Diet Assessment Form ➔
            </a>
          </div>

          <!-- Support & WhatsApp -->
          <p style="font-size: 13px; color: #555; line-height: 1.6;">
            Need help or want to send your medical reports via WhatsApp? <br/>
            💬 <a href="${whatsappLink}" style="color: #5C7A57; font-weight: bold; text-decoration: none;">Chat with us on WhatsApp (+91 87968 89242)</a>
          </p>

          <hr style="border: none; border-top: 1px solid #EBE3D8; margin: 20px 0;" />

          <p style="font-size: 11px; color: #888; text-align: center; margin: 0;">
            Balanced Plate Nutrition Clinic • support@balancedplate.co.in • Delhi, India
          </p>
        </div>

      </div>
    `;

    // Only attempt sending email if SMTP credentials or user environment configured
    if (process.env.SMTP_PASSWORD || process.env.SMTP_USER) {
      await transporter.sendMail({
        from: `"Balanced Plate Clinic" <${process.env.SMTP_USER || 'support@balancedplate.co.in'}>`,
        to: email,
        bcc: 'support@balancedplate.co.in', // Send copy to clinic
        subject: `Appointment Confirmed (${bookingId}) - Balanced Plate Clinic`,
        html: htmlContent,
      });
    }

    return NextResponse.json({ success: true, message: 'Confirmation email generated' });
  } catch (error: any) {
    console.error('Send confirmation email error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
