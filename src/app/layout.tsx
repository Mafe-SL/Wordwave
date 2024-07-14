import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Nunito } from "next/font/google";
import './globals.css'
import { Toaster } from '@/components/ui/sonner';

const font = Nunito ({subsets : ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}