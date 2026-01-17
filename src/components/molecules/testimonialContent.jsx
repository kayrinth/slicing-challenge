import { TestimonialArticle } from "../atoms/testimonialArticle";

export function TestimonialContent() {

    const testimonials = [
        {text: "“I finally understood how to split a page into components without overthinking.”", name: "Alya", role: "Frontend student", avatarClass: "avatar--a" },
        {text: "“The section layout is clean and the cards are perfect for reuse.”", name: "Bima", role: "Bootcamp participant", avatarClass: "avatar--c" },
        {text: " “Easy to theme. I swapped colors and added dark mode in 10 minutes.”", name: "Citra", role: "Junior developer", avatarClass: "avatar--e" },
    ]

  return (
    <>
      {testimonials.map((item, index) => (
        <TestimonialArticle
          key={index}
          text={item.text}
          name={item.name}
          role={item.role}
          avatarClass={item.avatarClass}
        />
      ))}
   </>
  );
}