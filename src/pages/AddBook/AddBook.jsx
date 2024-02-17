import './addbook.css';
import * as Yup from 'yup';
import axios from 'axios';
import {notificationContext} from '../../context/notificationContext';
import { useTranslation } from 'react-i18next';
import {useForm} from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { AddPageInput } from '../../components/AddPageInput';
import { Button } from '../../components/Button';
import { DragInputGroup } from '../../components/DragInputGroup/DragInputGroup';
import { genres } from '../../constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { tokenContext } from '../../context/tokenContext';
import { ErrorSpan } from '../../components/ErrorSpan';
import { useNavigate } from 'react-router-dom';
import { PageLoader } from '../../components/PageLoader';
export const AddBook = () => {
    const {t} = useTranslation();
    const {setMsg} = useContext(notificationContext);
    const navigate = useNavigate();
    const {token} = useContext(tokenContext);
    const [fileError, setFileError] = useState("");
    const [pageLoader, setPageLoader] = useState(false);
    const schema = Yup.object().shape({
        title: Yup.string().required(t("input.title.validation.required")),
        pages: Yup.string().required(t("input.pages.validation.required")),
        year: Yup.string().required(t("input.year.validation.required")),
        price: Yup.string().required(t("input.price.validation.required")),
        author: Yup.string().required(t("input.author.validation.required")),
        genre: Yup.string().required(t("input.genre.validation.required")),
        bio: Yup.string().required(t("input.bio.validation.required")),
        file: Yup.mixed().required(t("input.file.validation.required"))
        // file: Yup.mixed().required(t("input.file.validation.required")).test('fileType', t("input.file.validation.invalid"), (value) => {
        //     if(!value) return true;
        //     const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/svg", "image/webp"];
        //     return allowedTypes.includes(value?.[0]?.type)
        // })
    });
    const {register, handleSubmit, setValue, formState: {errors, isValid, isDirty}} = useForm({
        resolver: yupResolver(schema),
        mode: "all"
    });
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const {ref: fileRef} = register("file");
    const [genreId, setGenreId] = useState(null);
    const [authors, setAuthors] = useState([]);
    const {ref: genreRef} = register("genre");

    useEffect(() => {
        setPageLoader(true);
        axios.get(`http://localhost:5000/author/genreId/${genreId}`)
        .then(res => {
            console.log(res);
            setPageLoader(false);
            if(res?.status === 201) {
                setAuthors(res?.data);
            }
        })
        .catch(err => {
            setPageLoader(false);
            console.log(err);
        });
    }, [genreId]);
    function onSubmit(data) {
        if(!file) {
            setFileError(t("input.file.validation.required"));
            return;
        }
        setLoading(true);
        const genre = genres.find(item => {
            return item.value == data.genre;
        });
        const formdata = new FormData();
        formdata.append('image', file);
        formdata.append('title', data.title);
        formdata.append('page', data.pages);
        formdata.append('year', data.year);
        formdata.append('price', data.price);
        formdata.append('author_id', data?.author);
        formdata.append('genre_id', genre?.id);
        formdata.append('description', data?.bio);
        console.log(formdata.get("image"));
        console.log(formdata.get("author_id"));
        axios.defaults.headers.common['Authorization'] = token;
        axios.post('http://localhost:5000/book', formdata)
        .then(res => {
            console.log(res);
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

    function handleGenreChange(e) {
        const genreId = genres.find(item => {
            return item.value == e.target.value;
        });
        setGenreId(genreId.id);
        setValue("genre", e.target.value);
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
                                 {t("add_book.title")}   
                            </strong>
                            <div className='flex flex-col gap-4 mb-[44px]'>
                                <AddPageInput placeholder={t("input.title.title")} {...register("title")} />
                                {
                                    errors?.title?.message && <ErrorSpan>{errors.title.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.pages.title")} type={'number'} {...register("pages")} />
                                {
                                    errors?.pages?.message && <ErrorSpan>{errors.pages.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.year.title")} type={'number'} min={1} {...register("year")} />
                                {
                                    errors?.year?.message && <ErrorSpan>{errors.year.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.price.title")} type={'number'} min={1} {...register("price")} />
                                {
                                    errors?.price?.message && <ErrorSpan>{errors.price.message}</ErrorSpan>
                                }
                                 <AddPageInput placeholder={t("input.genre.title")} isSelect={true} optionKeys={genres} options={t("genres", {returnObjects: true})} onChange={handleGenreChange} ref={genreRef} />
                                {
                                    errors?.genre?.message && <ErrorSpan>{errors.genre.message}</ErrorSpan>
                                }
                                 <AddPageInput placeholder={t("input.author.title")} isSelect={true} isAuthor={true} optionKeys={genres} options={authors}  {...register("author")} />
                                {
                                    errors?.author?.message && <ErrorSpan>{errors.author.message}</ErrorSpan>
                                }
                                <AddPageInput placeholder={t("input.bio.title")} isTextArea={true} {...register("bio")} />
                                {
                                    errors?.bio?.message && <ErrorSpan>{errors.bio.message}</ErrorSpan>
                                }
                            </div>
                            <Button {...{isValid, loading}}>{t("add_book.button.title")}</Button>
                        </div>
                </div>
            </div>
        </form>
        {
            pageLoader && <PageLoader />
        }
    </div>
  )
}
