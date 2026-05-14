import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, website, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })    

    // 1️⃣ EMAIL TO YOU (LEAD DETAILS)
    await transporter.sendMail({
      from: `"Formyx Website" <${process.env.MAIL_USER}>`,
      to: "contact@formyxsolutions.com",
      subject: `New Sales Inquiry — ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message || "—"}</p>
      `,
    })

    // 2️⃣ AUTO-REPLY TO CUSTOMER
    await transporter.sendMail({
      from: `"Formyx" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We’ve received your request — Formyx",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting <strong>Formyx</strong>.</p>
        <p>We’ve received your request and our team will get back to you shortly.</p><p>
          If it’s urgent, reach us at 
          <strong>contact@formyxsolutions.com</strong> 
          or call 
          <strong>+91 95424 58159</strong> / <strong>+91 85198 73005</strong>.
        </p>
        <br/>
        <p>— Formyx Team</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
