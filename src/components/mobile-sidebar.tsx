import { Sidebar } from "@/components/sidebar";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side={"left"}>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}