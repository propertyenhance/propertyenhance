"use client";

import { useEffect } from "react";

export default function Uploader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@autoenhance.ai/web";
    script.setAttribute("api-key", "bfdc636a-a98a-4e34-8b70-d410776c423e");
    script.async = true;
    document.head.appendChild(script); // Better in head

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="p-8 bg-surface rounded-lg max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-8 text-primary">PropertyEnhance.co.za</h1>
      <p className="text-xl mb-6">Upload property photos for instant AI enhancement</p>
      <image-uploader
        theme="dark"
        max-files="50"
        preferences='{"ai_version": "latest"}'
      ></image-uploader>
    </div>
  );
}
