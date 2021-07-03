import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div style={{ position: "fixed", bottom: ".5rem", right: "1rem" }}>
            <Image
                className="object-contain transition-all duration-100 transform hover:scale-75"
                src="/img/cortadela/logo-white.png"
                width={24}
                height={24}
            />
        </div>
    )
}
