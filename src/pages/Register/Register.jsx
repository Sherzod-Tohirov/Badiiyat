import "./register.css";
import registerImage from "../../assets/images/register.svg";
import axios from "axios";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthInput } from "../../components/AuthInput";
import { ErrorSpan } from "../../components/ErrorSpan";
import { tokenContext } from "../../context/tokenContext";
import { Button } from "../../components/Button";
import { useTranslation } from "react-i18next";
export const Register = () => {
  const {setToken} = useContext(tokenContext);
  const [emailExistError, setEmailExistError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {t} = useTranslation();
  const schema = Yup.object().shape({
    first_name: Yup.string().required("First name is required !"),
    last_name: Yup.string().required("Last name is required !"),
    phone: Yup.string().required("Phone number is required !").min(9, "Phone number must be 9 length").max(9, "Phone number must be 9 length"),
    email: Yup.string().required("Email is required !").email("Email is not valid !"),
    password: Yup.string().required("Password is required !").min(8, "Password cannot be less than 8 chars")
  });
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });
  
  function onSubmit(data) {
    if(Object.entries.length) {
       axios.post("http://localhost:5000/user/register", data)
       .then(res => {
          if(res?.status === 201) {
              setToken(res.data?.token);
              setLoading(false);
              navigate("/");
          }
       })
       .catch(err => {
        setLoading(false);
         if(err?.response?.data?.message.includes("email")) {
           setEmailExistError(err?.response?.data?.message);
           return;
         }
         console.log(err);
       });
    }
  }

  return (
    <div className="signup auth">
        <div className="container mx-auto">
            <div className="flex">
                <div className="w-1/2">
                    <img className="w-full" src={registerImage} />
                </div>
                <div className="w-1/2 auth__form-wrapper">
                        <h2 className="auth__title">
                            {t("register.title")}
                        </h2>
                        <p className="auth__desc">{t("register.desc")} <Link to={'/login'} className="text-[#549FF9]">{t("login.title")}</Link></p>
                        <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                            <AuthInput placeholder={t("input.first_name.title")} {...register("first_name")}  />
                            {
                              errors?.first_name?.message && <ErrorSpan>{t("input.first_name.validation.required")}</ErrorSpan>
                            }
                            <AuthInput placeholder={t("input.last_name.title")} {...register("last_name")}  />
                            {
                              errors?.last_name?.message && <ErrorSpan>{t("input.last_name.validation.required")}</ErrorSpan>
                            }
                            <AuthInput placeholder={t("input.phone.title")} style="mb-[9px]"  type="tel" {...register("phone")}  />
                            {
                              errors?.phone?.message && <ErrorSpan>{t("input.phone.validation.invalid")}</ErrorSpan>
                            }
                            <AuthInput placeholder={t("input.email.title")}  type="email" {...register("email")}  />
                            {
                              errors?.email?.message && <ErrorSpan>{t("input.email.validation.required")}</ErrorSpan> || emailExistError && <ErrorSpan>{t("input.email.validation.exist")}</ErrorSpan>
                            }
                            <AuthInput placeholder={t("input.password.title")} style="mb-[18px]"  type="password" {...register("password")}  />
                            {
                              errors?.password?.message && <ErrorSpan>{t("input.password.validation.required")}</ErrorSpan>
                            }
                            <Button isValid={isValid} onClick={() => setLoading(true)} loading={loading}>{t("register.button.title")}</Button>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
