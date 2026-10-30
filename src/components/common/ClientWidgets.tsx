"use client";

import dynamic from "next/dynamic";

const PhotoOSChatbot = dynamic(
  () => import("@/components/chat/PhotoOSChatbot"),
  { ssr: false }
);

const PhotoSecurityGuard = dynamic(
  () => import("@/components/security/PhotoSecurityGuard"),
  { ssr: false }
);

export default function ClientWidgets() {
  return (
    <>
      <PhotoSecurityGuard />
      <PhotoOSChatbot />
    </>
  );
}

