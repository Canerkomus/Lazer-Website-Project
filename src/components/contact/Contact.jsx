import "./contact.scss";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="top">
          <div className="left">
            <h1>Bizimle İletişime Geçin...</h1>
            <h2>Size yardım etmek için her zaman hazırız.</h2>
            <form onSubmit={handleSubmit} className="formcontainer">
              <input
                className="inputarea"
                type="text"
                placeholder="İsminiz..."
              />

              <input
                className="inputarea"
                type="mail"
                placeholder="E-mail..."
              />
              <input
                className="inputarea"
                type="text"
                placeholder="Telefon numaranız..."
              />
              <textarea
                className="textbox"
                type="text"
                placeholder="Mesajınız..."
              />

              <button type="submit">Send</button>
            </form>
          </div>
          <div className="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50013.51006141942!2d27.094141506472937!3d38.4219611349492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e2fece48eb%3A0xafa58b890c33632a!2zS29uYWsvxLB6bWly!5e0!3m2!1str!2str!4v1627737210218!5m2!1str!2str"
              title="map"
              width={1020}
              height={630}
              style={{ border: 0, marginRight: "20px" }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="bottom">
          <div className="bottomLeft">
            <li>Hakkımızda</li>
            <li>Hüküm ve Koşullar</li>
            <li>Gizlilik Politikası</li>
          </div>
          <div className="bottomRight">
            <i className="icons fab fa-twitter"></i>
            <i className="icons fab fa-instagram"></i>
            <i className="icons fab fa-facebook-f"></i>
            <p>© 2021 MC Lazer - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
