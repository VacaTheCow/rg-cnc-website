import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const industry = formData.get("industry") as string;
  const message = formData.get("message") as string;
  const files = formData.getAll("files") as File[];

  const attachments = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name,
      content: buffer.toString("base64"),
    });
  }

  await resend.emails.send({
    from: "no-reply@rgprecisemachining.com",
    to: ["rjgl2003@gmail.com", "lablue79@yahoo.com"],
    subject: `New Quote Request from ${name}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Industry:</strong> ${industry}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      ${attachments.length > 0 ? `<p><strong>Attachments:</strong> ${attachments.length} file(s) included</p>` : ""}
    `,
    attachments,
  });

  return NextResponse.json({ success: true });
}
