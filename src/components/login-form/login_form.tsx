import { useState } from "react";
import { UserInputEmpty, UserLoginData } from "../../redux/store/features/user-features/interfaces/userFeatures_interfaces";
import { getLoginStatus, login } from "../../redux/store/features/user-features/slices/user_slices";
import '../../style_variables.css';
import { FormBtn } from "../btn/form-btn/form_btn";
import { useDispatch, useSelector } from "react-redux";
import { AppThunkDispatch } from "../../redux/store/store/store";
import LoadingSpinner from "../loading-spinner/loading_spinner";

export const LoginForm = () => {

  const dispatch = useDispatch<AppThunkDispatch>();
  const loginStatus = useSelector(getLoginStatus);
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
    if (!user.email) {
      setIsInputsEmpty((prevState) => ({
        ...prevState,
        emailEmpty: true
      }))
      inputFlag = true;
    }
    if (!user.password) {
      setIsInputsEmpty((prevState) => ({
        ...prevState,
        passwordEmpty: true
      }))
      inputFlag = true;
    }
    if (!inputFlag) {
      let formData = new FormData();
      formData.append("email", user.email);
      formData.append("password", user.password);
      dispatch(login(formData));
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  return (
    <>
      <div className="form-title-container">

        <h1 className="page-title">Logueate</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="input-label-container">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" className={`${isInputsEmpty.passwordEmpty && 'input-error'} form-input`} value={user.email} onChange={(e) => handleInputChange(e)} id="email" name="email" />
        </div>
        <div className="input-label-container">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="text" className={`${isInputsEmpty.emailEmpty && 'input-error'} form-input`} value={user.password} onChange={(e) => handleInputChange(e)} id="password" name="password" />
        </div>
        <div className="form-btn-container">
          {
            loginStatus === 'loading' ?
              <FormBtn content="Iniciar sesión" width={50} handleSubmit={handleSubmit} />
              :
              <LoadingSpinner />
          }
        </div>
      </form>
    </>
  )
}
