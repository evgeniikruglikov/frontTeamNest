import "./FooterBlock.css";

function FooterBlock() {
    return (
        <footer className="footer-block">
            <div className="footer-top">
                <div className="footer-top-left">
                    <a href="mailto: TeamNest@bk.ru" className="footer-mail">
                        TeamNest@bk.ru
                    </a>
                    <div className="footer-top-left-socials">
                        <a href="#" className="footer-link">
                            VK ↗
                        </a>
                        <a href="#" className="footer-link">
                            TG ↗
                        </a>
                    </div>
                </div>
                <div className="footer-partners">
                    <a href="#" className="partner-link">
                        {`{Партнёр}`} ↗
                    </a>
                    <a href="#" className="partner-link">
                        {`{Партнёр}`} ↗
                    </a>
                    <a href="#" className="partner-link">
                        {`{Партнёр}`} ↗
                    </a>
                    <a href="#" className="partner-link">
                        {`{Партнёр}`} ↗
                    </a>
                </div>
            </div>
            
            <div className="footer-bot">    
                <div className="footer-bot-logo">
                    TEAMNEST
                </div>
                <nav className="footer-nav">
                    <a href="#" className="footer-nav-link">
                        Кадры
                    </a>
                    <a href="#" className="footer-nav-link">
                        Стартапы
                    </a>
                    <a href="#" className="footer-nav-link">
                        Контакты                        
                    </a>
                </nav>
                <span className="footer-c">
                    ©2023
                </span>
            </div>
        </footer>
    );
}

export default FooterBlock;