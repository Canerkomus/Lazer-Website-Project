export default function NavLinks() {
  return (
    <div className="navlinks">
      <ul>
        <li>
          <a href="#home" className="active">
            Ana Sayfa
          </a>
        </li>
        <li>
          <a href="#about">Hakkımızda</a>
        </li>
        <li>
          <a href="#applications">Uygulamalar</a>
        </li>

        <li>
          <a href="#machines">Makinalar</a>
        </li>
        <li>
          <a href="#contact">İletişim</a>
        </li>
      </ul>{" "}
    </div>
  );
}
