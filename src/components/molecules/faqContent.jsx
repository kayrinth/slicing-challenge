import { FaqDetails } from "../atoms/faqDetails";

export function FaqContent() {

    const faq = [
        {question: "What does “slicing” mean?", answer: "Slicing means breaking a page into reusable UI components, then rebuilding it using those components."},
        {question: "Should we slice by section or by UI pattern?", answer: "Start by section, then extract repeated patterns like buttons, cards, badges, and layout wrappers."},
        {question: "Can we change the design?", answer: "Yes. After slicing, you can theme it, add dark mode, or replace content as long as structure remains similar."}
    ]

    return (
        <>
        {faq.map((item, index) => (
            <FaqDetails 
                key={index}
                question={item.question}
                answer={item.answer}
                
            />
        ))}
        </>
    )
}