// app/(dashboard)/layout.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If user is not logged in, redirect them away
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [status, router]);

  // You could show a loading state while checking session
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* --- Side Navigation --- */}
          <aside className="w-64 bg-gray-200 dark:bg-[#2C303B] p-4">
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="/dashboard">Overview</a>
                </li>
                <li>
                  <a href="/dashboard/settings">Settings</a>
                </li>
                {/* Add links as needed */}
              </ul>
            </nav>
          </aside>

          {/* --- Main Content --- */}
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
