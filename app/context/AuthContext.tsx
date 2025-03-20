// filepath: c:\Users\Lenovo\mealharbor\app\context\AuthContext.tsx
"use client";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
