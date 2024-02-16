import { RegularBtnProps } from './regular_btn_interfaces';
import '../../style_variables.css';

export const RegularBtn = (props: RegularBtnProps) => {
  
    const {handleClick, content, width} = props;

    return (
    <button onClick={handleClick && handleClick} style={{width}}>
        {content}
    </button>
  )
}
