import './styles.css';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterForm = () => {
    const telRegExp = /(?:(?:00|\+)?45)?\d{8}/

    const schema = yup.object().shape({
        fullName: yup.string().required("required"),
        email: yup.string().email().required("required"),
        tel: yup.string()
        .matches(telRegExp, 'Phone number is not valid')
        // .min(12, "to short")
        // .max(12, "to long")
        .required("required"),
        password: yup.string().min(6).max(20).required(),
        confirmPassword: yup.string()
        .oneOf([yup.ref("password"), null], "Password don't match.")
        .required(),
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
        <h2>Register</h2>
   
        <div>
        <label className="label" >Full Name</label>
        <input className="input" type = "text" placeholder = "Xxx Xxx" required {...register("fullName")} />
        <p className="validationMessage">{errors.fullName?.message}</p>
        </div>

        <div>
        <label className="label" >Email</label>
        <input className="input" type = "text" label="Email:" placeholder = "XXX@XXX.XXX" required {...register("email")}/>
        <p className="validationMessage">{errors.email?.message}</p>

        </div>

        <div>
        <label className="label" >Telephone</label>
        <input 
            className="input"
            type = "tel" 
            placeholder = "(0045)12345678" 
            required {...register("tel")}/>
        <p className="validationMessage">{errors.tel?.message}</p>

        </div>

        <div>
        <label className="label" >Password</label>
        <input className="input" type = "password"  required {...register("password")}/>
        <p className="validationMessage">{errors.password?.message}</p>
        </div>

        <div>
        <label className="label" >Confirm Password</label>
        <input className="input" type = "password" required {...register("confirmPassword")}/>
        <p className="validationMessage">{errors.confirmPassword?.message}</p>
        </div>

        <p><a href="http://localhost:3000/login">Do you have an account?</a></p>

        <div className="buttonContainer">
        <button>Register</button>
        </div>

    </form>
    </div>
  )
}