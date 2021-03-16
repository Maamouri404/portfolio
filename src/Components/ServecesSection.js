import clock from "../img/clock.svg";
import diaphgram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
const ServecesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> service.
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={diaphgram} alt='icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </Card>

          <Card>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='home2 img' />
      </Image>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServecesSection;
