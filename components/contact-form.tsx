"use client";

import { useRef, useState } from "react";
import Script from "next/script";

type AlertType = "idle" | "success" | "error";

const EMAILJS_PUBLIC_KEY = "HBnjcsrLCtxKOiSBP";
const EMAILJS_SERVICE_ID = "service_liwyg8j";
const EMAILJS_TEMPLATE_ID = "template_qfqgy9o";

declare global {
  interface Window {
    emailjs?: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, string>
      ) => Promise<unknown>;
    };
  }
}

function sanitizeInput(input: string) {
  return input.replace(/[<>]/g, "").trim().slice(0, 1000);
}

function validateName(name: string) {
  const nameRegex = /^[ก-๙a-zA-Z\s]+$/;
  const spamWords = ["test", "xxx", "admin", "spam", "bot"];
  const normalized = name.toLowerCase().trim();

  if (!nameRegex.test(name)) {
    return false;
  }

  return !spamWords.some((word) => normalized.includes(word));
}

function validatePhone(phone: string) {
  const cleaned = phone.replace(/[-\s]/g, "");
  const phoneRegex = /^0[689]\d{8}$/;

  if (/^(\d)\1+$/.test(cleaned)) {
    return false;
  }

  return phoneRegex.test(cleaned);
}

function validateMessage(message: string) {
  return message.trim().length >= 10;
}

export function ContactForm() {
  const [alertType, setAlertType] = useState<AlertType>("idle");
  const [alertMessage, setAlertMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [emailReady, setEmailReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const emailInitializedRef = useRef(false);

  const showAlert = (type: AlertType, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlertType("idle");

    if (!window.emailjs || !emailReady) {
      showAlert("error", "ระบบส่งข้อความยังไม่พร้อม กรุณาลองใหม่อีกครั้ง");
      return;
    }

    const form = formRef.current;
    if (!form) {
      showAlert("error", "ไม่พบข้อมูลฟอร์ม");
      return;
    }

    const formData = new FormData(form);
    const from_name = sanitizeInput(String(formData.get("from_name") || ""));
    const phone = sanitizeInput(String(formData.get("phone") || ""));
    const service = sanitizeInput(String(formData.get("service") || ""));
    const message = sanitizeInput(String(formData.get("message") || ""));

    if (!validateName(from_name)) {
      showAlert("error", "ชื่อไม่ถูกต้อง (ตัวอักษรไทย/อังกฤษเท่านั้น)");
      return;
    }

    if (!validatePhone(phone)) {
      showAlert("error", "เบอร์โทรไม่ถูกต้อง (ระบบไทย 0X-XXXXXXXX)");
      return;
    }

    if (!validateMessage(message)) {
      showAlert("error", "รายละเอียดต้องมีอย่างน้อย 10 ตัวอักษร");
      return;
    }

    setSubmitting(true);

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name,
        phone,
        service,
        message
      });

      showAlert("success", "ส่งข้อความสำเร็จ ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
      form.reset();
    } catch (error) {
      showAlert("error", error instanceof Error ? error.message : "ส่งไม่ผ่าน กรุณาลองใหม่อีกครั้ง");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.emailjs && !emailInitializedRef.current) {
            window.emailjs.init(EMAILJS_PUBLIC_KEY);
            emailInitializedRef.current = true;
            setEmailReady(true);
          }
        }}
      />

      <h2 className="text-2xl text-ink">ส่งข้อความหาเรา</h2>
      <p className="mt-2 text-sm text-ink/65">
        กรอกข้อมูลให้ครบแล้วกดส่งได้ทันที ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
      </p>

      {alertType !== "idle" ? (
        <div
          className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
            alertType === "success"
              ? "border-green-300 bg-green-50 text-green-800"
              : "border-red-300 bg-red-50 text-red-700"
          }`}
        >
          {alertMessage}
        </div>
      ) : null}

      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="ชื่อ-นามสกุล"
          className="rounded-xl border border-leaf/25 bg-white px-4 py-3 text-sm text-ink outline-none ring-leaf/60 transition focus:ring"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="เบอร์โทรศัพท์"
          className="rounded-xl border border-leaf/25 bg-white px-4 py-3 text-sm text-ink outline-none ring-leaf/60 transition focus:ring"
          required
        />
        <select
          name="service"
          defaultValue="ติดตั้งกล้อง"
          className="rounded-xl border border-leaf/25 bg-white px-4 py-3 text-sm text-ink outline-none ring-leaf/60 transition focus:ring"
        >
          <option value="ติดตั้งกล้อง">สนใจติดตั้งกล้อง</option>
          <option value="ซ่อมบำรุง">ซ่อมบำรุง</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
        <textarea
          name="message"
          rows={4}
          placeholder="รายละเอียดเพิ่มเติม"
          className="rounded-xl border border-leaf/25 bg-white px-4 py-3 text-sm text-ink outline-none ring-leaf/60 transition focus:ring"
          required
        />

        <button
          type="submit"
          disabled={submitting || !emailReady}
          className="cta-btn mt-2 w-full border-0 text-sm shadow-[0_12px_40px_-20px_rgba(34,197,94,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "กำลังส่ง..." : emailReady ? "ส่งข้อความ" : "กำลังโหลด..."}
        </button>
      </form>
    </>
  );
}
