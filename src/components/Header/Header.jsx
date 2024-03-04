import logo from '/header/full-logo.svg'
import basket from '/header/basket.svg'
import favorites from '/header/favorites.svg'
import user from '/header/user.svg'
import './Header.css'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header className="header">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav className="nav">
                <Link to="/catalog">Каталог</Link>
                <Link to="/">Популярные товары</Link>
                <Link to="/">Главная</Link>
            </nav>
            <div className="icons">
                <a href=""><img src={basket} alt="" /></a>
                <a href=""><img src={favorites} alt="" /></a>
                <a href=""><img src={user} alt="" /></a>
            </div>
        </header>
    )
}