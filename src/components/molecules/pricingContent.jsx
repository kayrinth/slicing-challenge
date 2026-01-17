import { PricingArticle } from "../atoms/pricingArticle";

export function PricingContent() {

    const pricing = [
        {title:"Starter", desc: "For beginners who want a clean template.", amount : "0", button: "Choose Starter", features : "1 landing page", access : "Community access", component : "Basic components", variant: "secondary"},
        {title:"Pro", desc: "For students slicing weekly challenges.", amount : "9", button: "Choose Pro", features : "10 templates", access : "Priority support", component : "Component checklist", tag: "Most Popular", className: "price-card--featured", variant: "primary"},
        {title:"Team", desc: "For group practice and code reviews.", amount : "29", button: "Choose Team", features : "Unlimited templates", access : "Review sessions", component : "Team guidelines", variant: "secondary"}

    ]

    return(
        <>
        {pricing.map((item, index) => (
            <PricingArticle 
                key={index}
                title={item.title}
                desc={item.desc}
                amount={item.amount}
                button={item.button}
                features={item.features}
                access={item.access}
                component={item.component}
                tag={item.tag}
                className={item.className}
                variant={item.variant}
            />
        ))}
        </>
    )
}