import "./login.css";
import loginImage from "../../assets/images/login.svg";
import { AuthInput } from "../../components/AuthInput";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../context/tokenContext";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorSpan } from "../../components/ErrorSpan";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "../../components/Button";
import { useTranslation } from "react-i18next";
export const Login = () => {
  const {token, setToken} = useContext(tokenContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {t} = useTranslation();
    useEffect(() => {
        if(token) {
            navigate("/");
        }
  }, []);
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required !").email("Email is not valid !"),
    password: Yup.string().required("Password is required !")
  });
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  
  function onSubmit(data) {
    if(Object.entries.length) {
       axios.post("http://localhost:5000/user/login", data)
       .then(res => {
          if(res?.status === 201) {
              setToken(res.data?.token);
              setLoading(false);
              navigate("/");
          }
       })
       .catch(err => {
        setLoading(false);
        setError(err?.response?.data?.message);
         console.log(err);
       });
    }
  }
  return (
    <div className="signin auth">
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-1/2">
                    <img className="w-full" src={loginImage} />
                </div>
                <div className="w-1/2 sigin__form-wrapper">
                        <h2 className="auth__title">
                            {t("login.title")}
                        </h2>
                        <p className="auth__desc">{t("login.desc")} <Link to={'/register'} className="text-[#549FF9]">{t("register.title")}</Link></p>
                        <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                        <AuthInput placeholder={t("input.email.title")}  type="email" {...register("email")}  />
                            {
                              errors?.email?.message && <ErrorSpan>{t("input.email.validation.required")}</ErrorSpan> 
                            }
                            <AuthInput placeholder={t("input.password.title")} style="mb-[18px]"  type="password" {...register("password")}  />
                            {
                              errors?.password?.message && <ErrorSpan>{t("input.password.validation.required")}</ErrorSpan>
                            }
                            {
                               error ? <ErrorSpan>{error}</ErrorSpan> : ""
                            }
                            <Button isValid={isValid} onClick={() => setLoading(true)} loading={loading}>{t("login.button.title")}</Button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
