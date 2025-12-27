"use client";

import { useEffect, useRef } from "react";

export default function Uploader() {
  const uploaderRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@autoenhance.ai/web";
    script.setAttribute("api-key", "bfdc636a-a98a-4e34-8b70-d410776c423e");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-8 bg-surface rounded-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">PropertyEnhance</h1>
      <p className="mb-4">Upload photos for AI enhancement</p>
      <image-uploader ref={uploaderRef} theme="dark" max-files="50"></image-uploader>
    </div>
  );
}
