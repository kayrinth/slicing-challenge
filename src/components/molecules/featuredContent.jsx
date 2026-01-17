import { FeaturedCard } from "../atoms/featuredCard";

export function FeaturedCardContent() {
const featuredCardContent  = [
 {icon: '⚡', title: 'Clean Spacing', text: 'Consistent paddings and gaps so your components look aligned.', link: '#pricing', cardLink: 'Learn more'},
 {icon: '🧩', title: 'Reusable Cards', text: 'Card patterns you can reuse for products, posts or services.', link: '#testimonials', cardLink: 'See examples'},
 {icon: '🎯', title: 'Simple Colors', text: 'Neutral base with one accent color, easy to theme later.', link: '#faq', cardLink: 'How to slice'},

]

    return (
        <>
            <div className="grid grid--3">
                {featuredCardContent.map((item, index) => (
                    <FeaturedCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                        link={item.link}
                        cardLink={item.cardLink}
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
        <ul className="list">
            {listItems.map((item, index) => (
                <li key={index} className="list__item"><span className="check">✓</span> {item}</li>
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
        <div className="mock__row">
            {mockRowItems.map((item, index) => (
                <div key={index} className="chip">{item}</div>
            ))}
        </div>
    )
}