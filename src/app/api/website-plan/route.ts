import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const website = String(formData.get("website") || "");
  const challenge = String(formData.get("challenge") || "");

  // Persist or forward the lead as needed (e.g., email, CRM, database).
  // For now, we just log it on the server.
  console.log("[WebsitePlanLead]", { name, email, website, challenge });

  // Redirect back to the homepage with a success flag
  const url = new URL(request.url);
  url.pathname = "/";
  url.searchParams.set("submitted", "1");

  return NextResponse.redirect(url.toString(), { status: 302 });
}


