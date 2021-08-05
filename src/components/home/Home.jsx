import "./home.scss";
import Button from "../button/Button";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      strings: ["lazer kesim", "kazıma", "desen çizimi"],
    });
  }, []);
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="backimg">
          <img
            src="https://www.mecanumeric.com/medias/machines/images/mecajet-ii-vue-principale.jpg"
            alt=""
            width="100%"
          />
        </div>
      </div>
      <div className="right">
        <div className="text">
          <div className="smallText">
            <h2>
              En son teknoloji lazer makinelerimiz ile
              <br />
              <span className="textRefSpan" ref={textRef}></span>
              <br />
              işlemlerinizi geniş desen portföyümüz <br />
              ile yapmaya hazırız.
            </h2>
          </div>
          <img
            className="downArrow"
            src="https://www.pngrepo.com/png/145159/512/down-arrow.png"
            alt=""
            width="3%"
          />
        </div>
        <div className="buttonPart">
          <a href="https://wa.me/905337653899">
            <Button />
          </a>
        </div>
      </div>
    </div>
  );
}
