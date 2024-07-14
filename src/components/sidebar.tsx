import { cn } from "@/libs/utils"
import Link from "next/link"
import { SidebarItem } from "./sidebar-items"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"

type Props = {
    className?: string
}

export const Sidebar = ({className}: Props) => {
    return (
        <div className={cn("flex bg-white  h-screen lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className
        )}>
            <Link href={"/learn"}>
            <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                <h1 className="text-2xl font-extrabold text-purple-600 tracking-wide">
                    wordwave
                </h1>
            </div>
            </Link>
            <div className="flex flex-col gap-y-2  flex-1">
                <SidebarItem iconSrc="/home.svg" label="Learn" href="/learn"/>
                <SidebarItem iconSrc="/award.svg" label="Leaderboard" href="/leaderboard"/>
                <SidebarItem iconSrc="/target.svg" label="Quests" href="/quests"/>
                <SidebarItem iconSrc="/shop.svg" label="Shop" href="/shop"/>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-white animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" />
                </ClerkLoaded>
            </div>
        </div>
    )
}