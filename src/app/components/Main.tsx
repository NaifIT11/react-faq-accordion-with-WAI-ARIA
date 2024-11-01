"use client";

import { useState } from "react";
import { Faq, FaqAccordion, FaqHeader } from "./Faq";

export default function MainComponent() {

  const [expandedAccordions, setExpandedAccordions] = useState<boolean[]>([false, false, false]);


  const toggleAccordion = (index: number) => {
    setExpandedAccordions(prevState => 
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <Faq>
      <FaqHeader title="FAQs" />
      <div className="flex flex-col gap-4 divide-y">
        <FaqAccordion
          key={1}
          id={1}
          header="Lorem ipsum dolor sit amet consectetur adipisicing?"
          expanded={expandedAccordions[0]}
          onExpandedChange={() => toggleAccordion(0)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati.
        </FaqAccordion>
        <FaqAccordion
          key={2}
          id={2}
          header="Lorem ipsum dolor sit amet consectetur adipisicing?"
          expanded={expandedAccordions[1]}
          onExpandedChange={() => toggleAccordion(1)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati.
        </FaqAccordion>
        <FaqAccordion
          key={3}
          id={3}
          header="Lorem ipsum dolor sit amet consectetur adipisicing?"
          expanded={expandedAccordions[2]}
          onExpandedChange={() => toggleAccordion(2)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati.
        </FaqAccordion>
      </div>
    </Faq>
  );
}
