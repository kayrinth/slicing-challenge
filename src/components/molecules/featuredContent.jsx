import { FeaturedCard } from "../atoms/featuredCard";

export function FeaturedCardContent() {
const featuredCardContent  = [
 {icon: '⚡', title: 'Clean Spacing', text: 'Consistent paddings and gaps so your components look aligned.', link: '#pricing'},
 {icon: '🧩', title: 'Reusable Cards', text: 'Card patterns you can reuse for products, posts or services.', link: '#testimonials'},
 {icon: '🎯', title: 'Simple Colors', text: 'Neutral base with one accent color, easy to theme later.', link: '#faq'},

]

    return (
        <>
            <div className="grid grid--3">
                {featuredCardContent.map((feat, index) => (
                    <FeaturedCard
                        key={index}
                        icon={feat.icon}
                        title={feat.title}
                        text={feat.text}
                        link={feat.link}
                    />
                ))}
            </div>
        </>
    );
}

export function FeaturedListContent() {

    const listItems = [
        "Start from layout: container, grid, split",
        "Extract repeated UI: buttons, cards, badges",
        "Use props for text and variants",
        "Keep CSS modular: component blocks"
    ];
    return (
        <ul class="list">
            {listItems.map((item, index) => (
                <li key={index} class="list__item"><span class="check">✓</span> {item}</li>
            ))}
        </ul>


    )
}


export function FeaturedMockRow() {

    const mockRowItems = [
        "Button",
        "Card",
        "Badge",
        "Modal"
    ];
    return (
        <div class="mock__row">
            {mockRowItems.map((item, index) => (
                <div key={index} class="chip">{item}</div>
            ))}
        </div>
    )
}