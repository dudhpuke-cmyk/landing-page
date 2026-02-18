import { SectionShell } from '../components/SectionShell'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

export const faqs = [
  {
    id: 'milk-source',
    question: 'Where do Dudhpuke products come from?',
    answer:
      'All Dudhpuke milk, paneer, ghee, and cheese come from Om Sai Pashu Palan, our own dairy farm in Itahari-20, Tarahara. We do not mix milk from unknown sources or bulk collection centres.',
  },
  {
    id: 'delivery-time',
    question: 'What time do you deliver products?',
    answer:
      'Delivery timings are planned for early mornings so fresh milk and dairy products reach you fresh. Exact timing can vary slightly by route and will be confirmed when you start your delivery.',
  },
  {
    id: 'products-available',
    question: 'What dairy products do you offer?',
    answer:
      'We offer fresh cow milk, paneer, ghee, and cheese. All products are made fresh daily from our own farm milk. You can order any combination of these products.',
  },
  {
    id: 'subscription-change',
    question: 'Can I change or pause my regular delivery?',
    answer:
      'Yes. You can message or call us to change quantities, add or remove products, pause on specific dates, or update your address.',
  },
  {
    id: 'payment-modes',
    question: 'How do I pay for Dudhpuke products?',
    answer:
      'Payments are usually settled on a monthly basis using your preferred offline or digital method.',
  },
]

export default function FaqSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="FAQ"
      title="Questions about Dudhpuke Products"
      description="A quick overview of how Dudhpuke milk and dairy product delivery works."
    >
      <Accordion aria-label="Frequently asked questions about Dudhpuke dairy products">
        {faqs.map((item) => (
          <AccordionItem key={item.id} itemId={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>
              <p className="leading-relaxed">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  )
}

