"use client";
//
import { useState } from "react";
import QRCode from "qrcode";
//
export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = async () => {
    if (!text.trim()) {
      alert("Please enter a URL or text");
      return;
    }

    try {
      const qr = await QRCode.toDataURL(text, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      });

      setQrCode(qr);
    } catch (error) {
      console.error("QR generation failed:", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">QR Code Generator</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter URL or text"
        className="w-full max-w-sm rounded-lg border p-3"
      />

      <button
        onClick={generateQRCode}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Generate QR Code
      </button>

      {qrCode && (
        <div className="flex flex-col items-center gap-3">
          <img src={qrCode} alt="Generated QR Code" />

          <button
            onClick={downloadQRCode}
            className="rounded-lg bg-green-600 px-6 py-3 text-white"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}
