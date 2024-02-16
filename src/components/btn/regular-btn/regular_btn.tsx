
import { RegularBtnProps } from '../btn_interfaces';
import '../btn.css';
import '../../../style_variables.css';

export const RegularBtn = (props: RegularBtnProps) => {
  
    const {handleClick, content, width} = props;

    return (
    <button onClick={handleClick && handleClick} style={{width: `${width}%`}} className='btn'>
        {content}
    </button>
  )
}
