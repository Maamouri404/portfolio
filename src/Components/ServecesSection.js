import clock from "../img/clock.svg";
import diaphgram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
const ServecesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>quality</span> service.
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </div>

          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </div>

          <div className='card'>
            <div className='icon'>
              <img src={diaphgram} alt='icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </div>

          <div className='card'>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>lorem ipsum dolor sit amet, consectet.</p>
          </div>
        </div>
        <div className='image'>
          <img src={home2} alt='home2 img' />
        </div>
      </div>
    </div>
  );
};
export default ServecesSection;
