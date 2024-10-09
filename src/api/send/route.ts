import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

export async function POST(req: Request): Promise<NextResponse> {
  type RequestBody = {
    email: string;
    subject: string;
    message: string;
  };

  const {}: RequestBody = await req.json();

  try {
    return NextResponse.json({});
  } catch (error: unknown) {
    return NextResponse.json({ error });
  }
}
