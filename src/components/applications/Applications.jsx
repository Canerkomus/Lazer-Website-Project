import { useEffect, useState } from "react";
import Applicationslist from "../applicationslist/Applicationslist";
import "./applications.scss";
import { Desen, Kesim, Markalama } from "../../data";

export default function Applications() {
  const [selected, setSelected] = useState("desen");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "desen",
      title: "Desen",
    },
    {
      id: "kesim",
      title: "Kesim",
    },
    {
      id: "markalama",
      title: "Markalama",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "desen":
        setData(Desen);
        break;
      case "kesim":
        setData(Kesim);
        break;
      case "markalama":
        setData(Markalama);
        break;

      default:
        setData(Desen);
    }
  }, [selected]);

  return (
    <div className="applications" id="applications">
      <h1>Biz ne yapıyoruz?</h1>
      <ul>
        {list.map((item) => (
          <Applicationslist
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
