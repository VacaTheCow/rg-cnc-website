// app/request-quote/email/route.ts
import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const QUOTES_DIR = path.join(process.cwd(), "data");
const UPLOADS_DIR = path.join(QUOTES_DIR, "uploads");
const QUOTES_FILE = path.join(QUOTES_DIR, "quotes.json");

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const industry = formData.get("industry") as string;
  const message = formData.get("message") as string;
  const files = formData.getAll("files") as File[];

  const timestamp = new Date().toISOString();

  await mkdir(UPLOADS_DIR, { recursive: true });
  await mkdir(QUOTES_DIR, { recursive: true });

  const savedFiles: string[] = [];
  const attachments = [];

  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const savedFileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(UPLOADS_DIR, savedFileName);

    await writeFile(filePath, buffer);
    savedFiles.push(savedFileName);

    attachments.push({
      filename: file.name,
      content: buffer.toString("base64"),
    });
  }

  interface QuoteData {
    timestamp: string;
    name: string;
    email: string;
    company: string;
    industry: string;
    message: string;
    files: string[];
  }
  
  const quoteData: QuoteData = {
    timestamp,
    name,
    email,
    company,
    industry,
    message,
    files: savedFiles,
  };  
  
  // Save to quotes.json
  await mkdir(QUOTES_DIR, { recursive: true });
  
  let existingQuotes: QuoteData[] = [];
  try {
    const content = await readFile(QUOTES_FILE, "utf-8");
    existingQuotes = JSON.parse(content);
  } catch {
    existingQuotes = [];
  }
  
  existingQuotes.push(quoteData);
  await writeFile(QUOTES_FILE, JSON.stringify(existingQuotes, null, 2));

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
