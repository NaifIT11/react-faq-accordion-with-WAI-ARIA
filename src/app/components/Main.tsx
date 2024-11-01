"use client";

import { useState } from "react";
import { Faq, FaqAccordion, FaqHeader } from "./Faq";

export default function MainComponent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      id: 1,
      header: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati."
    },
    {
      id: 2,
      header: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati."
    },
    {
      id: 3,
      header: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quas commodi cum suscipit adipisci eius placeat voluptatem est ipsum recusandae enim, ratione debitis consectetur numquam molestiae quae iusto nostrum obcaecati."
    }
  ];

  return (
    <Faq>
      <FaqHeader title="FAQs" />
      <div className="flex flex-col gap-4 divide-y">
        {faqs.map((faq, index) => (
          <FaqAccordion
            key={faq.id}
            id={faq.id}
            header={faq.header}
            expanded={expandedIndex === index}
            onExpandedChange={() => toggleAccordion(index)}
          >
            {faq.description}
          </FaqAccordion>
        ))}
      </div>
    </Faq>
  );
}
