import "./counter.scss";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="counter-up">
      <div className="content">
        <div className="box">
          <div className="icon">
            <i className="fas fa-gift"></i>
          </div>
          <div className="counter">
            <CountUp end={480} duration={7} />
          </div>
          <div className="text">Tamamlanan Proje</div>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="counter">
            <CountUp end={436} duration={6} />
          </div>
          <div className="text">Mutlu Müşteri</div>
        </div>
        <div className="box">
          <div className="icon">
            <i className="fas fa-award"></i>
          </div>
          <div className="counter">
            <CountUp end={120} duration={5} />
          </div>
          <div className="text">Ödül</div>
        </div>
        <div className="box">
          <div className="icon ">
            <i className=" fas fa-map-marker-alt"></i>
          </div>
          <div className="location"> İZMİR</div>
        </div>
      </div>
    </div>
  );
}
