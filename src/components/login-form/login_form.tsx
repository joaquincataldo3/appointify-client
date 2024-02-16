import { useState } from "react";
import { UserLoginData } from "../../redux/store/features/user-features/interfaces/userFeatures_interfaces";

export const LoginForm = () => {
 
  const [user, setUser] = useState<UserLoginData>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        <input type="text" value={user.email} onChange={(e) => handleInputChange(e)}/>
        <input type="text" value={user.password} onChange={(e) => handleInputChange(e)}/>
    </form>
  )
}
