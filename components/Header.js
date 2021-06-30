import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center h-auto bg-white px-8 pt-8 pb-2" style={{ backgroundColor: "#222f33" }}>
            <div className="flex flex-grow justify-evenly items-center max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain transition-all duration-100 transform hover:scale-75"
                src="/img/cortadela/logo.png"
                width={40}
                height={40}
            />
        </header>
    )   
}