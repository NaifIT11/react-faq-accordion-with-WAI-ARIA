"use client"

import { useRef, useState } from "react";
import { Faq, FaqAccordion, FaqHeader } from "./Faq";




export default function MainComponent(){
    const [expand , setExpand] = useState<boolean>(false);
    return (
        <Faq>
            <FaqHeader title="FAQs" />
            <div className="flex flex-col gap-3 divide-y">
                <FaqAccordion id={1} header="Lorem ipsum dolor sit amet consectetur adipisicing?" expanded={expand} onExpandedChange={() => setExpand(!expand)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati.
                </FaqAccordion>
            </div>
        </Faq>
    )
}