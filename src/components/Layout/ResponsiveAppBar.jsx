import React, { useState, useEffect } from "react";
import WhiteButton from "../UI/WhiteButton";
import "./ResponsiveAppBar.css";

const navItems = ["Кадры", "Стартапы", "Контакты"];

function ResponsiveAppBar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      }
      else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`appbar ${isHidden ? "hidden" : "visible"}`}>
      <div className="appbar-container">
        <a href="/" className="appbar-logo" aria-label="TEAMNEST — главная">
          <span className="logo-text">TEAMNEST</span>
        </a>

        <nav className="appbar-nav" aria-label="Основное меню">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Переход к: ${item}`);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="appbar-button">
          <WhiteButton width={180} height={48} fontSize={16}>
            Зарегистрироваться
          </WhiteButton>
        </div>
      </div>
    </header>
  );
}

export default ResponsiveAppBar;