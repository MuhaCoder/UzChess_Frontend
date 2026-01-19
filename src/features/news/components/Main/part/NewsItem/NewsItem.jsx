import Var from './NewsItem.module.css'

export default function NewsItem({info}) {
    return (
        <>
            <div className={Var.itemCover}>
                <img src={info.image} alt={info.alt}/>
                <span>{info.month} {info.day}, {info.year}</span>
                <h6>{info.text}</h6>
                <p>{info.p}</p>
            </div>
        </>
    );
}