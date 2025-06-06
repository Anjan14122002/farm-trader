import { useState } from 'react';

function FAQ({ faqs }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="max-w-3xl mb-40  mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between items-center w-full p-4 focus:outline-none"
                        >
                            <span className="text-lg font-semibold">{faq.question}</span>
                            <svg
                                className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
