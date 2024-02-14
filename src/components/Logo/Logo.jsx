import s from "./style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'



export function Logo({ title, subtitle }) {
    return (
        <div>
            <div className={s.container}>
                <FontAwesomeIcon icon={faClapperboard} style={{ color: "#078df2", scale: "1.5", marginTop: "13px", marginRight: "5px" }} />
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.subtitle}>{subtitle}</span>
        </div>
    );
}