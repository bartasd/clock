import style from "./Select.module.css";
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function Select(){
    const [currentTime, setTime] = useState([0,0,0]);
    const { updateTime } = useContext(GlobalContext);

    const handleGmt = (e) => {
        const GMT = e.target.value;
        fetch(`https://worldtimeapi.org/api/timezone/Etc/GMT${GMT>=0 ? "-"+GMT : "+"+ GMT*(-1)}`)
            .then(response => response.json())
            .then(data => {
                const t = data.datetime.slice(11,19).split(":");
                setTime(t);
                updateTime(t);
            })
            .catch(error => console.error(error));
    };

    useEffect(() => {
        handleGmt({ target: { value: 2 } });
    }, []);
    

    useEffect(() => {
        const interval = setInterval(() => {
            updateTime(currentTime => {
                let [hr, mi, se] = currentTime;
                se = parseInt(se, 10) + 1;
                if (se === 60) {
                    se = 0;
                    mi = parseInt(mi, 10) + 1;
                    if (mi === 60) {
                        mi = 0;
                        hr = parseInt(hr, 10) + 1;
                        if (hr === 24) {
                            hr = 0;
                        }
                    }
                }
                hr = hr < 10 ? `0${hr}` : `${hr}`;
                mi = mi < 10 ? `0${mi}` : `${mi}`;
                se = se < 10 ? `0${se}` : `${se}`;
                return [hr, mi, se];
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);
    
    
    const options = [];

    options.push(<option value={2}  selected disabled hidden>Select an option</option>)

    for (let i = -11; i < 12; i++) {
        if(i<0)
            options.push(<option value={i}>GMT{i}</option>);
        else
            options.push(<option value={i}>GMT+{i}</option>);
    }

    return (
        <div className={style.cont}>
            <label for="gmt-select">Choose your GMT:</label>
            <select name="gmt" id="gmt-select" onChange={handleGmt}>
                {options}
            </select>
        </div>
    );
}