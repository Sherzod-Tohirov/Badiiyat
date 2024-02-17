import "./profilesecurity.css";
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { ProfileInputGroup } from "../../components/ProfileInputGroup";
import { SaveChangesButton } from "../../components/SaveChangesButton";
import { PageLoader } from "../../components/PageLoader";
import { useContext, useEffect, useState } from "react";
import { DevTool } from "@hookform/devtools";
import axios from "axios";
import { tokenContext } from "../../context/tokenContext";
import { ErrorSpan } from "../../components/ErrorSpan";
import { notificationContext } from "../../context/notificationContext";
import { useTranslation } from "react-i18next";
export const ProfileSecurity = () => {
  const [pageLoader, setPageLoader] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const {token} = useContext(tokenContext);
  const {setMsg} = useContext(notificationContext);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required !").email("Email is not valid !"),
    currentPassword: Yup.string().required("Current password is required !"),
    newPassword: Yup.string().required("New password is required !"),
  })
  const {register, handleSubmit, setValue, formState: {errors, isDirty, isValid}, control} = useForm({
    resolver: yupResolver(schema),
  });

  const {t} = useTranslation();

  function onSubmit(data) {
    setEmailError(""); 
    setPasswordError("");
    setLoading(true);
    axios.put('http://localhost:5000/user/security', data)
    .then(res => {
      setLoading(false);
      if(res.status === 201) {
        console.log(res);
         setMsg(t("notifications.updated.title"));
        //  window.location.reload();
      }
    })
    .catch(err => {
      setLoading(false);
      if(err?.response?.data?.message.includes('email')) {
        setEmailError(err?.response?.data?.message.replaceAll('"', '').replace(new RegExp('^(e)'), 'E'));
      }

      if(err?.response?.data?.message.includes('password')) {
        setPasswordError(err?.response?.data?.message);
      }

      console.log(err);

    })
  }

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token;
    axios.get('http://localhost:5000/user/me')
    .then(res => {
      setPageLoader(false);
      if(res?.status === 201) {
        setUser(res?.data);
        setValue('email', res?.data?.email);
      }
    })
    .catch(err => {
      setPageLoader(false);
      console.log(err);
      
    });
  }, [pageLoader]);
  return (
    <div className="profilesecurity">
      <div className="container">
        <form className="profilesecurity__form" onSubmit={handleSubmit(onSubmit)}>
          <strong className="profilesecurity__title">
            {t("profile.security.title")}
          </strong>
          <ProfileInputGroup style={'mb-[22px]'} label={t("profile.security.email.title")} type={'email'} info={t("profile.security.email.info")} {...register('email')} />
          {
            errors?.email?.message && <ErrorSpan style={'mb-[15px]'}>{t("profile.security.email.validation.required")}</ErrorSpan> || emailError && <ErrorSpan style={'mb-[15px]'}>{t("input.email.validation.exist")}</ErrorSpan>
          }
          <ProfileInputGroup style={'mb-[16px]'} label={t("profile.security.current_password.title")} type={'password'} info={t("profile.security.current_password.info")} {...register('currentPassword')} />
          {
            errors?.currentPassword?.message && <ErrorSpan style={'mb-[15px]'}>{t("profile.security.current_password.validation.required")}</ErrorSpan> || passwordError && <ErrorSpan style={'mb-[15px]'}>{t("profile.security.current_password.validation.invalid")}</ErrorSpan>
          }
          <ProfileInputGroup style={errors?.newPassword?.message ? 'mb-[10px]'  : 'mb-[89px]'} label={t("profile.security.new_password.title")} type={'password'} info={t("profile.security.new_password.info")} {...register('newPassword')} />
          {
            errors?.newPassword?.message && <ErrorSpan style={'mb-[89px]'}>{t("profile.security.current_password.validation.required")}</ErrorSpan>
          }
          <SaveChangesButton style={!isValid && 'opacity-65' || 'cursor-pointer'} loading={loading} disabled={!isValid}>{t("profile.button.save_changes")}</SaveChangesButton>
        </form>
      </div>
      {
        pageLoader && <PageLoader />
      }
    </div>
  )
}
