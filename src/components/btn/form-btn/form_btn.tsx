import { FormBtnProps } from '../btn_interfaces';
import '../btn.css';
import '../../../style_variables.css';

export const FormBtn = (props: FormBtnProps) => {
  
    const {handleSubmit, content, width} = props;

    return (
    <button onClick={handleSubmit} style={{width: `${width}%`}} className='btn'>
        {content}
    </button>
  )
}