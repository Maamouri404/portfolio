import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSections = () => {
  const [element, controls] = useScroll();

  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <h2>
        any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, saepe.
            </p>
          </div>
        </Toggle>

        <Toggle title='Daily Schedule?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, saepe.
            </p>
          </div>
        </Toggle>

        <Toggle title='Different Payement Methods?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, saepe.
            </p>
          </div>
        </Toggle>

        <Toggle title='What Product Do You Offer ?'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, saepe.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;
export default FaqSections;
