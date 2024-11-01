import { Sparkle } from "lucide-react";



export function Faq({children}: {children: React.ReactNode}){
    return (
        <div className="w-1/2 p-4 flex flex-col gap-4 rounded bg-white shadow-xl">{children}</div>
    )
}


export function FaqHeader({title}: {title: string}){
    return (
        <div className="flex gap-4">
            <Sparkle className="size-6 text-rose-900" />
            <h1 className="text-2xl text-rose-900">{title}</h1>
        </div>
    )
}