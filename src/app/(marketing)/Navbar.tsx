import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import {Loader} from "lucide-react";
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-purple-600">
                wordwave
              </span>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/review" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Review</Link>
                <Link href="/learn" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Learn</Link>
                <Link href="/classes" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Classes</Link>
                <Link href="/schools" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Schools</Link>
                <Link href="/shop" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Shop</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <ClerkLoading>
          <Loader className='h-5 w-5 animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
          <SignedOut>
            <SignInButton mode='modal'>
              <Button size={"lg"} variant={"primary"}>
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button size={"lg"} variant={"primaryOutline"}>
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
                <Link href="/learn" className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                <UserButton afterSignOutUrl='/' />
          </SignedIn>
          </ClerkLoaded>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
