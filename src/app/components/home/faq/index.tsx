import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
    {
        question: "Do you charge per day or per singing event?",
        answer:
            "Charges are generally based on the type of event, duration, location, and performance requirements. Custom packages are available depending on your needs.",
    },
    {
        question: "What are your minimum charges for a singing performance?",
        answer:
            "Minimum charges vary based on the event type, travel, and performance duration. Please get in touch for a personalized quote.",
    },
    {
        question: "Can we reschedule a booked singing show?",
        answer:
            "Yes, rescheduling is possible depending on availability. Advance notice is required, and terms may vary based on the agreement.",
    },
    {
        question: "What types of events do you perform at?",
        answer:
            "Performances are available for festivals, weddings, Garba nights, cultural programs, private events, and international shows.",
    },
    {
        question: "Which languages and genres do you specialize in?",
        answer:
            "Specialized in Hindi, Gujarati, Marwari, and Rajasthani music, including Bollywood, folk, Garba, and traditional wedding songs.",
    },
    {
        question: "Do you perform internationally?",
        answer:
            "Yes, international performances are available for tours, cultural events, and private shows worldwide.",
    },
];

export default function Faq() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
                <div className="flex flex-col gap-4 items-center animate-in fade-in slide-in-from-top-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                    <Badge
                        variant="outline"
                        className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
                    >
                        FAQs
                    </Badge>
                    <h2 className="text-5xl font-medium text-center max-w-lg">
                        Got questions? We’ve got answers ready
                    </h2>
                </div>
                <div>
                    <Accordion className="w-full flex flex-col gap-6">
                        {FAQ_DATA.map((faq, index) => (
                            <AccordionItem
                                key={`item-${index}`}
                                value={`item-${index}`}
                                className={cn(
                                    "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both",
                                    index === 0 && "delay-100",
                                    index === 1 && "delay-200",
                                    index === 2 && "delay-300",
                                    index === 3 && "delay-400",
                                    index === 4 && "delay-500",
                                )}
                            >
                                <AccordionTrigger className="p-0 text-xl font-medium  **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                                    {faq.question}
                                    <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                                </AccordionTrigger>
                                <AccordionContent className="p-0 text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
