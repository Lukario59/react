import './Footer.css'
import logo from '/header/full-logo.svg'


export default function Footer(){
    return(
        <footer className="footer">
            <div className="nav_logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav_footer">
                <div className="nav_footer_h">
                    Навигация по сайту 
                </div>
                <a href="">Каталог</a>
                <a href="">Популярные товары</a>
                <a href="">Главная</a>
            </div>
            <div className="nav_footer">
                <div className="nav_footer_h">
                    Помощь
                </div>
                <a href="">Договор публичной оферты</a>
                <a href="">Поддержка</a>
                <a href="">Возврат товара</a>
            </div>
            <div className="nav_footer">
                <div className="nav_footer_h">
                    Контакты
                </div>
                <a href="">+7 956 758 65 65</a>
                <a href="">clothes@gmail.com</a>
                <a href="">улица Мусы Джалиля, 14/10, 
Казань, Республика Татарстан</a>
            </div>
        </footer>
    )
}