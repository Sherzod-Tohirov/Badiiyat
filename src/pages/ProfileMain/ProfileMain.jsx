import "./profilemain.css";
import defaultImage from "../../assets/images/default.png";
import { ProfileInputGroup } from "../../components/ProfileInputGroup";
import { SaveChangesButton } from "../../components/SaveChangesButton";
import { SeparatorLine } from "../../components/SeparatorLine";
import { useContext, useEffect, useState } from "react";
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { tokenContext } from "../../context/tokenContext";
import { ErrorSpan } from "../../components/ErrorSpan";
import { PageLoader } from "../../components/PageLoader";
import { notificationContext } from "../../context/notificationContext";
import { useTranslation } from "react-i18next";
export const ProfileMain = () => {
  const {token} = useContext(tokenContext);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [pageLoader, setPageLoader] = useState(true);
  const {setMsg} = useContext(notificationContext);
  const defaultFileImage = new File(['default'], defaultImage, {
    type: 'image/png',
  });

  const schema = Yup.object().shape({
    first_name: Yup.string().required("First name is required !"),
    last_name:Yup.string().required("Last name is required !"),
    phone: Yup.string().required("Phone number is required !"),
 });

  const {register, control, handleSubmit, setValue, reset, formState: {errors, isValid, isDirty}} = useForm({
    resolver: yupResolver(schema),
    mode: 'all',  
  });
  const {t} = useTranslation();
  function onSubmit(data) {
    console.log(data);
    const {first_name, last_name, phone} = data;
    const formData = new FormData();
    formData.append('image', file);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    formData.append('phone', phone);
    setLoading(true);
    console.log(formData.get('image'));
    axios.putForm('http://localhost:5000/user/account', data)
    .then(res => {
      console.log(res);
      if(res?.status === 201) {
        setLoading(false);  
        setMsg(t("notifications.updated.title"));
        setTimeout(() => window.location.reload(), 1000);
      }
    })

  }

  function handleFileChange(e) {
    console.log(e);
    setFile(URL.createObjectURL(e?.target?.files[0]));
    setValue('image', e?.target?.files[0], {shouldDirty: true});
  }

  useEffect(() => {
      axios.defaults.headers.common['Authorization'] = token;
      axios.get('http://localhost:5000/user/me')
      .then(res => {
        if(res?.status === 201) {
          setUser(res?.data);
          setValue('first_name', res?.data?.first_name);
          setValue('last_name', res?.data?.last_name);
          setValue('phone', res?.data?.phone);
          setValue('image', defaultFileImage);
          // setFile(URL.createObjectURL(new Blob(res?.data?.image)));
          setPageLoader(false);
        }
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
    {
      user && (<div className="profilemain">
      <div className="container">
          <form className="profilemain__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                  <img className="rounded-full object-cover w-[175px] h-[175px]" src={file || (user?.image && `http://localhost:5000/${user?.image}`) || defaultImage} alt="Image" />
                  <div className="relative">
                    <label className="profilemain__image-label" htmlFor="image"></label>
                     <input className="hidden" id="image" type="file" accept="image/*" {...register('image')} onChange={handleFileChange} />
                  </div>
              </div>
              <div className="flex flex-col flex-grow pt-[43px]">
                  <strong className="profilemain__title">{t("profile.main.title")}</strong>
                  <ProfileInputGroup value={user?.first_name} style={'mb-[22px]'} label={t("profile.main.first_name.title")} info={t("profile.main.first_name.info")} {...register('first_name')} />
                  {
                      errors?.first_name?.message && <ErrorSpan style={'mb-3'}>{t("profile.main.first_name.validation.required")}</ErrorSpan>
                  }
                  <ProfileInputGroup value={user?.last_name}  style={'mb-4'} label={t("profile.main.last_name.title")} info={t("profile.main.last_name.info")} {...register('last_name')} />
                  {
                      errors?.last_name?.message && <ErrorSpan style={'mb-3'}>{t("profile.main.last_name.validation.required")}</ErrorSpan>
                  }
                  <ProfileInputGroup value={user?.phone} style={'mb-[26px]'} inputStyle={'w-1/2'} label={t("profile.main.phone.title")} info={t("profile.main.phone.info")} {...register('phone')} />
                  {
                      errors?.phone?.message && <ErrorSpan style={'mb-3'}>{t("profile.main.phone.validation.required")}</ErrorSpan>
                  }
                  <SeparatorLine style={'mb-[44px]'} />
                  <SaveChangesButton style={`${!isDirty ? 'opacity-80' : ''}`} disabled={!isDirty && !loading} loading={loading}>{t("profile.button.save_changes")}</SaveChangesButton>
              </div>
          </form>
      </div>     
  </div>)
    }
    {
          pageLoader && <PageLoader />
    }
    </>
    
  )
}
