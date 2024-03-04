import banner from '/banner/banner.jpg'
import './Banner.css'
import Button from '../Button/Button'
export default function Banner(){
    return(
        <section className="banner">
            <img src={banner} alt="" />
            <div className="banner_head">
                <h1>Онлайн магазин</h1>
                <p>* лучший по продажам среди конкурентов</p>
                <Button title="Каталог"/>
            </div>
        </section>
    )
}