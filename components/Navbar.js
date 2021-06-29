import { useRouter } from 'next/dist/client/router'
import requests from '../utils/requests'

export default function Navbar() {
    const router = useRouter()
    return (
        <nav>
            <div className="flex pt-3 px-10 sm:px-10 whitespace-nowrap space-x-5 sm:space-x-10 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <span
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className="cursor-pointer transition-all duration-100 transform hover:scale-125 hover:text-white text-base uppercase font-bold"
                    >{title}</span>
                ))}
            </div>
            {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" /> */}
        </nav>
    )
}
