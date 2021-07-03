import { useRouter } from 'next/dist/client/router'
import requests from '../utils/requests'

export default function Navbar() {
    const router = useRouter()
    return (
        <nav>
            <div className="flex flex-wrap px-10 py-6 justify-around items-center">
            {/* <div className="flex justify-center pt-6 pb-3 px-5 sm:px-10 whitespace-nowrap space-x-5 sm:space-x-10 overflow-x-scroll scrollbar-hide bg-black"> */}
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <span
                        key={key}
                        onClick={() => router.push(`/?genre=${key}`)}
                        className="cursor-pointer transition-all duration-100 transform hover:scale-125 hover:text-white text-base m-2"
                    >#{title}</span>
                ))}
            </div>
            {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" /> */}
        </nav>
    )
}
