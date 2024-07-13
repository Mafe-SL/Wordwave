import {MobileSidebar} from "./mobile-sidebar"
export const MobileHeader = () => {
    return(
        <nav className="lg:hidden px-6 h-[50px] flex item-center bg-purple-600 border-b fixed top-0 w-full z-50">
            <MobileSidebar />
        </nav>
    )
}