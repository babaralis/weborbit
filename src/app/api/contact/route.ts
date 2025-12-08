import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    firstName: String(formData.get("firstName") || ""),
    lastName: String(formData.get("lastName") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    companyName: String(formData.get("companyName") || ""),
    companyWebsite: String(formData.get("companyWebsite") || ""),
    message: String(formData.get("message") || ""),
    hearAboutUs: String(formData.get("hearAboutUs") || ""),
  };

  console.log("[ContactFormSubmission]", payload);

  const url = new URL(request.url);
  url.pathname = "/contact";
  url.searchParams.set("sent", "1");

  return NextResponse.redirect(url.toString(), { status: 302 });
}


