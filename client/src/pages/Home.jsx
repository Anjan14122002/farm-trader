
import HeroSection from "../component/HeroSection";
import FeaturesSection from "../component/FeaturesSection";
import CategorySection from "../component/CategorySection";
import TopProduct from "../component/TopProducts";
import FAQ from "../component/FAQ";
function Home () {
    
return (

        <>
        
        <HeroSection/>
        <FeaturesSection/>
        <TopProduct/>
        <CategorySection/>
        <FAQ faqs={faqs}/>

        </>
    )
    
}

const faqs = [
    {
    question: 'How do I sell my Farm equipment?',
    answer: 'You can sell your Farm Equipment by listing it on AgroTrader website.'
},
{
    question: 'How do I sell my used tracktor?',
    answer: 'You can sell your new or used tractor by listing it on AgroTrader website. Do not forget to mark it as new or used while creating the equipment listing'
},
{
    question: 'Is there an option to buy equipment?',
    answer: 'There are many variations of passages of Lorem Ipsum available.'
},
{
    question: `I dont's have a website, Can I still sell on AgroTrader?`,
    answer: 'There are many variations of passages of Lorem Ipsum available.'
},
{
    question: `How can I communicate with you?`,
    answer: 'There are many variations of passages of Lorem Ipsum available.'
}
];
export default Home;