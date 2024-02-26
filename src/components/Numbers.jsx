import style from "./Numbers.module.css";

export default function Numbers(){
    const hours = Array.from({ length: 12 }, (_, i) => i+1);
    return (
        <>
            {
                hours.map(hour => (
                    <div
                        key={hour}
                        className={style.number}
                        style={{ transformOrigin: 'bottom center', transform: `rotate(${hour * 30}deg)` }}
                    >
                        <span>{hour}</span>
                    </div>
                ))
            }
        </>
    );
}