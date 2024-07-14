import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { Suspense } from "react";
import Loading from "./learn/loading";

type Props = {
 children: React.ReactNode
}
const MainLayout = ({children}: Props) => {
    return ( 
        <>
        <MobileHeader />
        <Sidebar className="hidden lg:flex" />
        <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
            <div className="max-w-[1056px] mx-auto pt-6 h-screen">
        <Suspense fallback={<Loading />} />
            {children}

            </div>
        </main>
        </>
    );
}

export default MainLayout