"use client";

import { ThankYouPage } from "@/components/forms/ThankYouPage";
import { useRouter } from "next/navigation";

export default function ThankYouRoute() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return <ThankYouPage />;
}

