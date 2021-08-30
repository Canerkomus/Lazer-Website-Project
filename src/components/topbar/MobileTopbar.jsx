import { useState } from "react";

export default function MobileTopbar() {
  const [visible, setVisible] = useState(false);

  const hamburgerIcon = (
    <i className="menuicon fas fa-bars" onClick={() => setVisible(!visible)} />
  );
  const closeIcon = (
    <i className="menuicon fas fa-times" onClick={() => setVisible(!visible)} />
  );
  return (
    <div className="mobiletopbar">
      {visible}
      {visible ? closeIcon : hamburgerIcon}
    </div>
  );
}
