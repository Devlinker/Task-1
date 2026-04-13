import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";
import "./faq.scss";

const faqs = [
  {
    question: "Is there a speed limit?",
    answer:
      "Valam allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. We strictly advise to follow local speed limits.",
  },
  { question: "What is the minimum age to hire a car?" },
  { question: "Booking criteria & documents?" },
  { question: "Can I extend / cancel / modify?" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <div className="container">
        <div className="faq-header">
          <h2>FAQs</h2>
          <span className="view-all">
            View all <FiArrowRight />
          </span>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                {isOpen && faq.answer && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
