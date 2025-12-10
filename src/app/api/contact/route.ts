import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const payload = {
      name: String(data.name || ""),
      email: String(data.email || ""),
      company: String(data.company || ""),
      website: String(data.website || ""),
      budget: String(data.budget || ""),
      timeline: String(data.timeline || ""),
      message: String(data.message || ""),
    };

    console.log("[ContactFormSubmission]", payload);

    // Forward to external API
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websorbit.com/api';
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('email', payload.email);
    formData.append('company', payload.company);
    formData.append('website', payload.website);
    formData.append('budget', payload.budget);
    formData.append('timeline', payload.timeline);
    formData.append('message', payload.message);

    const externalResponse = await fetch(`${baseUrl}/sendContactEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const externalData = await externalResponse.json().catch(() => ({}));

    if (!externalResponse.ok || externalData.status === false) {
      throw new Error(externalData.message || 'Failed to send contact email');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Contact form submitted successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ContactFormError]", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit contact form" 
      },
      { status: 500 }
    );
  }
}
