import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/logo.jpg" alt="" />
          </div>
        </div>

        <div className="center">
          <li>
            <a href="#home" className="active">Ana Sayfa</a>
          </li>
          <span className="span">|</span>
          <li>
            <a href="#about">Hakkımızda</a>
          </li>
          <span className="span">|</span>
          <li>
            <a href="#applications">Uygulamalar</a>
          </li>
          <span className="span">|</span>

          <li>
            <a href="#machines">Makinalar</a>
          </li>
          <span className="span">|</span>
          <li>
            <a href="#contact">İletişim</a>
          </li>
        </div>
        <div className="right">
          <li>
            <a href="https://wa.me/905337653899">
              <img
                className="wpimg"
                src="https://capslocknext.com/wp-content/uploads/2019/11/whatsapp-logo-light-green-png-0.png"
                alt=""
              />
              <p>Teklif Al !</p>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
