import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const payload = {
      companyName: String(data.companyName || ""),
      slogan: String(data.slogan || ""),
      industry: String(data.industry || ""),
      website: String(data.website || ""),
      email: String(data.email || ""),
      phone: String(data.phone || ""),
    };

    console.log("[BriefFormSubmission]", payload);

    // Forward to external API
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://payment.websiteoptimax.com/api';
    const formData = new FormData();
    formData.append('companyName', payload.companyName);
    formData.append('email', payload.email);
    formData.append('industry', payload.industry);
    formData.append('phone', payload.phone);
    formData.append('slogan', payload.slogan);
    formData.append('website', payload.website);

    const externalResponse = await fetch(`${baseUrl}/sendEmail`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    });

    const externalData = await externalResponse.json().catch(() => ({}));

    if (!externalResponse.ok || externalData.status === false) {
      throw new Error(externalData.message || 'Failed to send email');
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[BriefFormError]", error);
    return NextResponse.json(
      { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit form" 
      },
      { status: 500 }
    );
  }
}

