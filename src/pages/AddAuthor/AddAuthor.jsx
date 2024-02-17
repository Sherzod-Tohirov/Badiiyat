import './addauthor.css';
import * as Yup from 'yup';
import axios from 'axios';
import {notificationContext} from '../../context/notificationContext';
import { useTranslation } from 'react-i18next';
import {useForm} from 'react-hook-form';
import { useContext, useState } from 'react';
import { AddPageInput } from '../../components/AddPageInput';
import { Button } from '../../components/Button';
import { DragInputGroup } from '../../components/DragInputGroup/DragInputGroup';
import { genres } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { tokenContext } from '../../context/tokenContext';
import { ErrorSpan } from '../../components/ErrorSpan';
import { useNavigate } from 'react-router-dom';
export const AddAuthor = () => {
    const {t} = useTranslation();
    const {setMsg} = useContext(notificationContext);
    const navigate = useNavigate();
    const {token} = useContext(tokenContext);
    const [fileError, setFileError] = useState("");
    const schema = Yup.object().shape({
        first_name: Yup.string().required(t("input.first_name.validation.required")),
        last_name: Yup.string().required(t("input.last_name.validation.required")),
        dob: Yup.string().required(t("input.dob.validation.required")),
        dod: Yup.string().required(t("input.dod.validation.required")),
        country: Yup.string().required(t("input.country.validation.required")),
        genre: Yup.string().required(t("input.genre.validation.required")),
        bio: Yup.string().required(t("input.bio.validation.required")),
        file: Yup.mixed().required(t("input.file.validation.required"))
        // file: Yup.mixed().required(t("input.file.validation.required")).test('fileType', t("input.file.validation.invalid"), (value) => {
        //     if(!value) return true;
        //     const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/svg", "image/webp"];
        //     return allowedTypes.includes(value?.[0]?.type)
        // })
    });
    const {register, handleSubmit, formState: {errors, isValid, isDirty}} = useForm({
        resolver: yupResolver(schema),
        mode: "all"
    });
    console.log(errors);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const {ref: fileRef} = register("file");
    function onSubmit(data) {
        if(!file) {
            setFileError(t("input.file.validation.required"));
            return;
        }
        setLoading(true);
        const genreId = genres.find(item => {
            return item.value == data.genre;
        });
        console.log(genreId);
        const formdata = new FormData();
        formdata.append('image', file);
        formdata.append('first_name', data.first_name);
        formdata.append('last_name', data.last_name);
        formdata.append('country', data.country);
        formdata.append('date_of_birth', data.dob);
        formdata.append('date_of_death', data.dod);
        formdata.append('genre_id', genreId?.id);
        formdata.append('bio', data.bio);
        console.log(formdata.get("image"));
        axios.defaults.headers.common['Authorization'] = token;
        axios.post('http://localhost:5000/author', formdata)
        .then(res => {
            if(res.status === 201) {
                setLoading(false);
                setMsg(t("notifications.created.title"));
                navigate("/");
            }
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        })
    }
  return (
    <div className='addauthor'>
        <form className='addauthor__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='addauthor__left-wrapper w-1/2 lg:h-screen sm:h-full'>
                    <DragInputGroup {...{file, setFile, preview, setPreview}} ref={fileRef} error={fileError} />
            </div>
            <div className='addauthor__right-wrapper w-1/2'>
                <div className='container'>
                        <div className='flex flex-col'>
                            <strong className='addauthor__title'>
                                 {t("add_author.title")}   
                            </strong>
                            <div className='flex flex-col gap-4 mb-[44px]'>
                                <AddPageInput placeholder={t("input.first_name.title")} {...register("first_name")} />
                                {
                                    errors?.first_name?.message && <ErrorSpan>{errors.first_name.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.last_name.title")} {...register("last_name")} />
                                {
                                    errors?.last_name?.message && <ErrorSpan>{errors.last_name.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.dob.title")} type={'number'} min={1} {...register("dob")} />
                                {
                                    errors?.dob?.message && <ErrorSpan>{errors.dob.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.dod.title")} type={'number'} min={1} {...register("dod")} />
                                {
                                    errors?.dod?.message && <ErrorSpan>{errors.dod.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.country.title")} {...register("country")} />
                                {
                                    errors?.country?.message && <ErrorSpan>{errors.country.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.genre.title")} isSelect={true} optionKeys={genres} options={t("genres", {returnObjects: true})} {...register("genre")} />
                                {
                                    errors?.genre?.message && <ErrorSpan>{errors.genre.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.bio.title")} isTextArea={true} {...register("bio")} />
                                {
                                    errors?.bio?.message && <ErrorSpan>{errors.bio.message}</ErrorSpan>
                                }
                            </div>
                            <Button {...{isValid, loading}}>{t("add_author.button.title")}</Button>
                        </div>
                </div>
            </div>
        </form>
    </div>
  )
}
