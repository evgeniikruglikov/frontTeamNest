import React, { useState, useEffect, useRef } from "react";
import "./ResponsiveAppBarLogged.css";
import profilepic from "../../assets/profilepic.svg";

const navItems = ["Кадры", "Стартапы", "Контакты"];

function ResponsiveAppBarLogged() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

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

  useEffect(() => {
    const onClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
}, []);

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

        <div className="appbar-profile" ref={menuRef}>
            <img src={profilepic} alt="Profile" className="profile-pic" onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && (
                <div className="profile-menu">
                    <div className="profile-header">
                        <img src={profilepic} alt="mini-pic" />
                        <div>
                            <p className="profile-name">Евгений Кругликов</p>
                            <p className="profile-email">evgenii@yandex.ru</p>
                        </div>
                    </div>

                    <a className="menu-feature" href="/profile">
                        <img src="../../assets/circle-user-round.svg" />
                        Мой профиль
                    </a>
                    <a className="menu-feature" href="/projects">
                        <img src="../../assets/folder-open.svg" />
                        Мои проекты
                    </a>
                    <a className="menu-feature" href="/responses">
                        <img src="../../assets/notebook-tabs.svg" />
                        Мои отклики
                    </a>
                    <a className="menu-feature" href="/starred">
                        <img src="../../assets/star.svg" />
                        Избранное
                    </a>

                    <div className="menu-divider" />

                    <a className="menu-feature-logout" href="/logout">
                        <img src="../../assets/log-out.svg" />
                        Выход
                    </a>
                </div>
            )}
        </div>
      </div>
    </header>
  );
}

export default ResponsiveAppBarLogged;