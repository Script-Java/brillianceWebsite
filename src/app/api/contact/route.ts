import { NextResponse } from "next/server";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Initialize Payload
    const payload = await getPayload({ config: configPromise });

    // Save to Payload CMS
    await payload.create({
      collection: "contact-submissions",
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    // Check for email credentials
    if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
      console.error("[Nodemailer] EMAIL or EMAIL_PASS environment variables are missing.");
      throw new Error("Email configuration credentials are missing on the server.");
    }

    // Create transporter (support custom SMTP host or fallback to Gmail)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpSecure = process.env.SMTP_SECURE === "true";

    const transporter = smtpHost
      ? nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        })
      : nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message}`,
    };

    // Send the email
    console.log(`[Nodemailer] Sending email from ${process.env.EMAIL} using ${smtpHost ? `SMTP host ${smtpHost}` : "Gmail service"}...`);
    await transporter.sendMail(mailOptions);
    console.log("[Nodemailer] Email sent successfully!");

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
