import '../../style_variables.css';
import { HomeStepsCarousel } from '../home-steps-carousel/home_steps-carousel';
import './home_main_block.css';


export const HomeMainBlock = () => {
    return (
        <>
            <div className='main-block-container'>
                <img src='/main-images/main-home-image.png' />
            </div>
            <HomeStepsCarousel />
        </>
    )
}
