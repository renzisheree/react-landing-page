import { useState } from "react";
import styled from "styled-components";
import DecorativeLine from "./DecorativeLine";

const FAQStyle = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    width: 792px;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 68px;

    span {
      display: inline-flex;
      flex-direction: column;
    }
  }
  .faq-items-container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .faq-item {
    cursor: pointer;
    padding: 22px 15px;
    background-color: #f5f5f5;
    border-radius: 8px;
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  .answer {
    padding: 15px;
    margin-bottom: 10px;
    text-align: left;
  }

  .arrow {
    transition: transform 0.3s;
    transform: rotate(0);
    color: #0f4c81;
  }

  .arrow.open {
    transform: rotate(180deg);
  }
`;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How Famee.ly Works?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil vitae reiciendis odit enim, officia voluptas adipisci distinctio perspiciatis magni nam, omnis nesciunt quisquam laudantium..",
    },
    {
      question: "How can I add a new member to my Circle?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit perferendis! Beatae nihil dolorum sed rem sint harum eligendi, dignissimos aperiam. Minima quas voluptatum consequatur architecto est enim veritatis? Distinctio ipsa voluptas inventore nulla, repellat recusandae illo deserunt sequi commodi alias quam est repudiandae, neque dignissimos minima suscipit, quia velit..",
    },
    {
      question: "How to join the Circle?",
      answer:
        "You receive an invite code to join a Circle? This means someone you know invited you join them on Famee.ly and be part of their private Circle. Simply join by going to Profile - Join A Circle, entering an Invite Code you received and you will be placed into your new Circle.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQStyle>
      <div className="container">
        <h1>
          Frequently Asked{" "}
          <span>
            Questions
            <DecorativeLine width={241} />
          </span>
        </h1>
        <p>
          Have questions? Here’s some useful info to help you get used to
          Famee.ly
        </p>
        <div className="faq-items-container">
          {" "}
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="faq-item" onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  ▼
                </span>
              </div>
              {openIndex === index && (
                <div className="answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </FAQStyle>
  );
};

export default FAQSection;
