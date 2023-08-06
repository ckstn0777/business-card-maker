"use client";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";

// {`https://localhost:3001/api/og?id=${id}`}
export default function CopyInput({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  const [buttonText, setButtonText] = useState("Copy");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="mx-20 space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex gap-6">
        <Input value={value} readOnly />

        <Button
          onClick={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            if (value && "clipboard" in navigator) {
              navigator.clipboard.writeText(String(value));
              setButtonText("Copied!");
              timeoutRef.current = setTimeout(() => {
                setButtonText("Copy");
              }, 5000);
            }
          }}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
