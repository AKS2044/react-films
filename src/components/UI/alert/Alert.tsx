import { useEffect, useState } from "react";
import { Severity } from "../../../enum/EnumSeverity";
import cl from "./Alert.module.scss";

type AlertProps = {
    children: any,
    severity?: string,
    className?: any
}

type CssProps = {
    border: string,
    background: string
}

const Alert = ({children, severity, className}: AlertProps) => {
    const [color, setColor] = useState<CssProps>();
    useEffect(() => {
        switch (severity) {
            case Severity.success:{
                const successStyle: CssProps = {border: '2px solid #8df391', background: '#2d7830'};
                setColor(successStyle)
                break;}

            case Severity.error:{
                const successStyle: CssProps = {border: '2px solid #9d0707', background: '#782d2d'};
                setColor(successStyle)
                break;}
            default:
                break;
        }
        }, []);
        
    return (
        <div style={{background: color?.background, border: color?.border}} className={cl.alert}>
            <div className={cl.alert__icon}></div>{children}
        </div>
    );
};

export default Alert;