import "./scroll-button.css";

import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function ScrollUp() {
  const [buttonStyle, setButtonStyle] = useState({
    visibility: "hidden",
    transition: "all 200ms ease-in",
  });

  useScrollPosition(
    ({ currPos }) => {
      const isVisible = currPos.y < -500;

      const targetStyle = {
        visibility: isVisible ? "visible" : "hidden",
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        transform: isVisible ? "none" : "translate(0, 100%)",
      };

      if (JSON.stringify(targetStyle) === JSON.stringify(buttonStyle)) return;

      setButtonStyle(targetStyle);
    },
    [buttonStyle]
  );

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="scroll-button" onClick={scrollToTop} style={buttonStyle}>
      <i className="icon fa fa-3x fa-angle-double-up"></i>
    </div>
  );
}
