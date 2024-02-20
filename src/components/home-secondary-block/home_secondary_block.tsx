import { HomeDropdownInfo } from "./home_secondary_block_interfaces";
import '../../style_variables.css';
import './home_secondary_block.css';
import { useState } from "react";

const dropdownBlockInfo: HomeDropdownInfo[] = [
    {
        index: 1,
        title: 'Protegé a tu compañía de ausencias en los turnos sin aviso',
        description: 'Para profesionales y clientes con agenda ocupada, es muy fácil perder el seguimiento de una cita. Por eso enviamos notificaciones automáticas con todos los detalles vía mail'
    },
    {
        index: 2,
        title: 'Construí tu agenda personalizada',
        description: 'Tus necesidades, tu agenda. Esto asegura la flexibilidad y seguridad para el profesional'
    },
    {
        index: 3,
        title: 'Tranquilidad y seguridad',
        description: 'Dejá que Appointify maneje tus citas y vos te puedas ocupar de otras cosas'
    }
]

export const HomeSecondaryBlock = () => {

    const [activeDropdown, setActiveDropdown] = useState<number>(0);

    const handleDropdownClick = (step: number) => {
        if (step === activeDropdown) {
            setActiveDropdown(0);
        } else {
            setActiveDropdown(step);
        }
    }

    return (
        <div className="home-secondary-block-container">
            <div className="secondary-block-title-container">
                <h2 className="page-subtitle">Hacé que tu negocio crezca agendando online</h2>
            </div>
            <div className="dropdowns-container">
                {
                    dropdownBlockInfo.map(drop => {
                        return (
                            <div className={`dropdown-item-container ${activeDropdown === drop.index && 'dropdown-item-container-active'}`} key={`${drop.title}-${drop.index}`} onClick={() => handleDropdownClick(drop.index)}>
                                <h4>{drop.title}</h4>
                                <div className={`dropdown-toggler ${activeDropdown === drop.index && 'dropdown-toggler-active'}`}>
                                    <p>{drop.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
