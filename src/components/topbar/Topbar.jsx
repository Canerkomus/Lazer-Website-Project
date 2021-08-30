import "./topbar.scss";
import DesktopTopbar from "./DesktopTopbar";
import MobileTopbar from "./MobileTopbar";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <h1>MRY</h1>
          <img
            src="https://www.seekpng.com/png/full/436-4365593_png-file-svg-exo-baekhyun-symbol.png"
            alt=""
            width="16%"
          />
        </div>
        <div className="center">
          <DesktopTopbar />
          <MobileTopbar />
        </div>
        <div className="right">
          <div className="whatsapp">
            <a href="https://wa.me/0533753899">
              <img
                src="https://www.reformdanismanlik.com.tr/wp-content/uploads/2017/01/whatsapp.png"
                alt=""
                width="11%"
              />

              <p>Teklif Al !</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
