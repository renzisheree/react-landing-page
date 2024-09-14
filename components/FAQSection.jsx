import { useState } from "react";
import styled from "styled-components";
import DecorativeLine from "./DecorativeLine";

const FAQStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 792px;
    gap: 20px;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2.5em;
      font-weight: 700;
      line-height: 1.2;

      span {
        display: inline-flex;
        flex-direction: column;
      }
    }

    p {
      font-size: 1em;
      font-weight: 400;
      line-height: 1.5;
      color: #424242;
      text-align: center;
    }

    .faq-items-container {
      display: flex;
      width: 100%;
      gap: 20px;
      flex-direction: column;

      .faq-item {
        cursor: pointer;
        padding: 25px;
        background-color: #f5f5f5;
        border-radius: 8px;
        margin: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2em;
        font-weight: 600;
        line-height: 1.2;

        &:hover {
          background-color: #f1f1f1;
        }

        .arrow {
          transition: transform 0.3s;
          transform: rotate(0);
          color: #0f4c81;

          &.open {
            transform: rotate(180deg);
          }
        }
      }

      .answer {
        padding: 10px;
        margin-bottom: 5px;
        text-align: left;
        font-size: 0.9em;
        font-weight: 400;
        color: #424242;
        line-height: 1.5;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;

    .container {
      width: 95%;

      h1 {
        font-size: 2em;
      }

      p {
        font-size: 0.9em;
      }

      .faq-item {
        font-size: 1.1em;
      }
    }
  }

  @media (max-width: 480px) {
    .container {
      h1 {
        font-size: 1.8em;
      }

      p {
        font-size: 0.8em;
      }

      .faq-item {
        font-size: 1em;
        padding: 15px 0;
      }
    }
  }
`;

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How Famee.ly Works?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil vitae reiciendis odit enim, officia voluptas adipisci distinctio perspiciatis magni nam, omnis nesciunt quisquam laudantium.",
    },
    {
      question: "How can I add a new member to my Circle?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, impedit perferendis! Beatae nihil dolorum sed rem sint harum eligendi, dignissimos aperiam. Minima quas voluptatum consequatur architecto est enim veritatis? Distinctio ipsa voluptas inventore nulla, repellat recusandae illo deserunt sequi commodi alias quam est repudiandae, neque dignissimos minima suscipit, quia velit.",
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
    <FAQStyle id="faq">
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
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="faq-item" onClick={() => toggleAnswer(index)}>
                {faq.question}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  ▾
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
