import { Sparkle } from "lucide-react";



export 


export function FaqHeader({title}: {title: string}){
    return (
        <div className="flex gap-4">
            <Sparkle className="size-6 text-rose-300" />
            <h1 className="text-2xl text-rose-900">{title}</h1>
        </div>
    )
}