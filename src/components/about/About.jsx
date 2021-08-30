import Counter from "../counter/Counter";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="containerAbout">
        <div className="company">
          <h1 className="companyHead">Firmamız</h1>
          <h2 className="companyText">
            Faaliyetlerine 2004 yılında İzmir Işıkkent'te başlayan firmamız
            kendini sürekli bir şekilde geliştirerek hizmet verdiği sektörlere
            hala ilk günki heyecanı ile hizmetlerini sunmaya devam etmektedir.
          </h2>
        </div>
        <div className="vision">
          <h1 className="visionHead">Vizyonumuz</h1>
          <h2 className="visionText">
            Amacımız; Yurtiçinde katma değerli çözümler oluşturup, teknolojik
            gelişmelere hızla uyum sağlayan, müşteri ve çalışan memnuniyetini en
            üst düzeyde tutan, birinci derecede tercih edilen, sektöründe
            uzmanlaşmış bir şirket olmak.
          </h2>
        </div>
        <div className="mission">
          <h1 className="missionHead">Misyonumuz</h1>
          <h2 className="missionText">
            İmalat ve lazer alanında her türlü yapı ve tesisin proje
            hizmetlerini yetkin insan gücü ve teknolojik altyapı ile
            müşterilerimizin isteklerini hızlı ekonomik ve kaliteli bir şekilde
            karşılayarak gerçekleştirmek ve süreç dahilinde bilimsel ve
            teknolojik çözümler üretmektir. .
          </h2>
        </div>
      </div>
      <div className="containerExplain">
        <h1>Hızlı Teslim</h1>
        <p>
          Bünyemizde bulunan alanında uzman ve dinamik ekibimiz, müşteri
          memnuniyetini esas alarak firmanızın ve markanızın ihtiyaçlarını
          analiz ederek en uygun çözüm ortaklığını sunmaktadır. Hizmet ve ürün
          yelpazemizi gelen talepler doğrultusunda genişleterek en kaliteli ve
          en yüksek performanslı üretimleri gerçekleştirmekteyiz. 400 m2 kapalı
          alanda son teknoloji lazer kesim makinalarımızla hizmet veren
          firmamız, müşterilerine göstermiş olduğu kaliteli hizmeti, ekonomik
          çözümler ve zamanında teslimat ile bütünleştirmektedir. Müşteri
          memnuniyetinin önemli olduğunu bilen MC Lazer süreklilik için önce
          kalite felsefesi ile çalışmalarını sürdürmekte ve içinde bulunduğu
          sektörde her zaman kaliteyi arttırmayı hedefleyerek, sizlere hizmet
          sunmaya zevk ve heyecanla devam etmektedir.
        </p>
      </div>
      <div className="containerCounter">
        <Counter />
      </div>
    </div>
  );
}
