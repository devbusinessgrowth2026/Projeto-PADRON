import { Fragment } from 'react'

const textSliderData = [
    "Elétrica & Automação",
    "Padrão LIGHT",
    "CFTV",
    "Centrais de Alarme",
    "Aumento de Carga",
    "Porteiro Eletrônico",
    "Sistemas Prediais",
    "Cozinha Industrial",
    "Elétrica & Automação",
    "Padrão LIGHT",
    "CFTV",
    "Centrais de Alarme"
];
const MarqueTwo = ({className}:{className?:string}) => {
    return (
        <div className={`marque-section ${className}`}>
            <div className="container-fluid">
                <div className="marquee-wrapper style-2 text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item style-2">
                                {textSliderData.map((text, index) => (
                                    <Fragment key={index}>
                                        <span className="text-slider">
                                            <img src="/img/asterisk.svg" alt="img" />
                                        </span>
                                        <span className="text-slider text-style">{text}</span>
                                    </Fragment>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MarqueTwo