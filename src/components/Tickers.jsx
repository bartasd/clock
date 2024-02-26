import style from "./Tickers.module.css";

export default function Numbers(){
    return (
        <>
        <div className={`${style.tickerCont} ${style.hourCont}`}>
            <div className={style.hour}></div>
        </div>
        <div className={`${style.tickerCont} ${style.minuteCont}`}>
            <div className={style.minute}></div>
        </div>  
        <div className={`${style.tickerCont} ${style.secondCont}`}>
            <div className={style.second}></div>
        </div>
        </>
    );
}