import { useEffect, useState } from "react";
import { StepsInfo } from "../home-main-block/home_main_block_interfaces";
import './home_steps_carousel.css';


const stepsInfo: StepsInfo[] = [
    {
        index: 1,
        title: 'Configurá tu disponibilidad',
        description: 'Definí tu agenda, conectá tu calendario y los horarios pertinentes figurarán en tu página'
    },
    {
        index: 2,
        title: 'Compartí tu link para agendar',
        description: 'Lo podes compartir con los clientes con tan solo copiarlo'
    },
    {
        index: 3,
        title: 'Dejá que los turnos entren !',
        description: 'Vas a recibir notificaciones a medida que los turnos se vayan agendando'
    }
]

export const HomeStepsCarousel = () => {

    const [activeStep, setActiveStep] = useState<number>(1);

    const handleChangeStep = (e: React.MouseEvent) => {
        const targetClassname = e.currentTarget.className;
        if(targetClassname.includes('right-arrow')){
            setActiveStep(activeStep + 1);
        } else {
            setActiveStep(activeStep - 1);
        }
    }


    return (
        <div className="booking-steps-container">
            <div className={`arrow-container prev-step-arrow-container ${activeStep === 1 && 'arrow-container-inactive'}`}>
                <i className='bx bx-chevron-left arrow left-arrow' onClick={(e) => handleChangeStep(e)}></i>
            </div>
            {
                stepsInfo.map(step => {
                    return (
                        <div className={`step-container ${step.index === activeStep ? 'step-container-active' : ''}`}
                            style={{ transform: `translateX(${(step.index - activeStep) * 100}%)` }} key={`${step.index}-${step.title}`}>
                            <div className="step-number-container">
                                <p>{step.index}</p>
                            </div>
                            <div className="step-box-container">
                                <div className="step-title-container">
                                    <h3>{step.title}</h3>
                                </div>
                                <div className="step-desc-container">
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={`arrow-container next-step-arrow-container ${activeStep === stepsInfo.length && 'arrow-container-inactive'}`}>
                <i className='bx bx-chevron-right arrow right-arrow' onClick={(e) => handleChangeStep(e)}></i>
            </div>
        </div>
    )
}
