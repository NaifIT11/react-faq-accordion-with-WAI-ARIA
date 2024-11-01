import { Minus, Sparkle } from "lucide-react";



export function Faq({children}: {children: React.ReactNode}){
    return (
        <div className="w-[50vw] p-4 flex flex-col gap-4 rounded bg-white shadow-xl">{children}</div>
    )
}


export function FaqHeader({title}: {title: string}){
    return (
        <div className="flex items-center gap-4">
            <Sparkle className="size-6 text-rose-900" />
            <h1 className="text-2xl text-rose-900 font-bold">{title}</h1>
        </div>
    )
}

type FaqAccordionProps = {
    id: number
    header: string,
    children: React.ReactNode
}

export function FaqAccordion({id , header , children}: FaqAccordionProps){
    return (
        <button className="flex justify-between items-center" aria-controls={`${id}-accoridion`}>
           <span>{header}</span>
           <Minus className="size-4 text-rose-900" />
        </button>
    )
}