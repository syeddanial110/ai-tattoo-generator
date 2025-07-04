import { Geist, Geist_Mono } from "next/font/google";
import loginBanner from "@/assets/Images/loginBanner.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen grid grid-cols-2 justify-items-center content-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div
            style={{
              backgroundImage: `url('${loginBanner.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              width: "100%",
            }}
          ></div>
          <div className="w-full max-w-md flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg shadow-sm p-8">
              {children}
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
