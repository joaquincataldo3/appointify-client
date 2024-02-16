import { useState } from "react";
import { UserInputEmpty, UserLoginData } from "../../redux/store/features/user-features/interfaces/userFeatures_interfaces";
import { login } from "../../redux/store/features/user-features/slices/user_slices";
import '../../style_variables.css';

export const LoginForm = () => {
 
  const [user, setUser] = useState<UserLoginData>({
    email: '',
    password: ''
  })
  const [isInputsEmpty, setIsInputsEmpty] = useState<UserInputEmpty>({
    emailEmpty: false,
    passwordEmpty: false
  })
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsInputsEmpty({
        emailEmpty: false,
        passwordEmpty: false
    })
    let inputFlag: boolean = false;
    if(!user.email) {
        setIsInputsEmpty((prevState) => ({
            ...prevState,
            emailEmpty: true
        }))
        inputFlag = true;
    }
    if(!user.password) {
        setIsInputsEmpty((prevState) => ({
            ...prevState,
            passwordEmpty: true
        }))
        inputFlag = true;
    }
    if(!inputFlag) {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("password", user.password);
        login(formData)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = e.target;
    setUser((prevUser) => ({
        ...prevUser,
        [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" className={`${isInputsEmpty.emailEmpty && 'input-error'}`} value={user.email} onChange={(e) => handleInputChange(e)}/>
        <input type="text" className={`${isInputsEmpty.passwordEmpty && 'input-error'}`} value={user.password} onChange={(e) => handleInputChange(e)}/>
    </form>
  )
}
