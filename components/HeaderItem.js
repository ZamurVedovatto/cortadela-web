export default function HeaderItem({ title, Icon }) {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-black text-xs">
            {/* TODO animate bounce not working */}
            <Icon className="animate-spin h-8 mb-1 group-hover:animate-pulse" /> 
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}
