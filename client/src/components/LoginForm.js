import './styles.css';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export const LoginForm = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required("required"),
        password: yup.string().required(),
    })

    const {register, handleSubmit, formState: {errors}} =useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

  return (
    <div className = "formContainer">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
   
        <div>
        <label className="label" >Email</label>
        <input className="input" type = "text" label="Email:" placeholder = "XXX@XXX.XXX" required {...register("email")}/>
        <p className="validationMessage">{errors.email?.message}</p>
        </div>

        <div>
        <label className="label" >Password</label>
        <input className="input" type = "password"  required {...register("password")}/>
        <p className="validationMessage">{errors.password?.message}</p>
        </div>

        <p><a href="http://localhost:3000/register">Do you have no account?</a></p>

        <div className="buttonContainer">
        <button>Login</button>
        </div>

    </form>
    </div>
  )
}