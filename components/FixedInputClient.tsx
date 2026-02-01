"use client";

import dynamic from "next/dynamic";

const FixedInput = dynamic(() => import("@/components/FixedInput"), {
  ssr: false,
});

export default function FixedInputClient() {
  return <FixedInput />;
}
