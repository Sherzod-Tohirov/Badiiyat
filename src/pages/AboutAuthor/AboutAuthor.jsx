import "./aboutauthor.css";
import authorImage from "../../assets/images/author-default.png";
import { AuthorBooks } from "../../components/AuthorBooks";
import { Header } from "../../components/Header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PageLoader } from "../../components/PageLoader";
import { tokenContext } from "../../context/tokenContext";
import { NotFound } from "../404/NotFound";

export const AboutAuthor = () => {
    const {t} = useTranslation();
    const {id} = useParams();
    const {token} = useContext(tokenContext);
    const [pageLoader, setPageLoader] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    useEffect(() => {
        setPageLoader(true);
        axios.defaults.headers.common['Authorization'] = token;
        axios.get(`http://localhost:5000/author/authorId/${id}`)
        .then(res => {
            setPageLoader(false);
            if(res?.data == "") {
                setError(true);
                return;
            }
            if(res?.status === 201) {
                setError(false);
                setData(res?.data);
            }
        })
        .catch(err => {
            setPageLoader(false);
            setError(true);
            console.log(err);
        });
    }, [id])
  return (
        <>
            <Header />
            {
                Object.keys(data).length ? (<div className="author">
                <div className="container">
                    <div className="flex gap-[64px] mb-[100px]">
                        <img className="object-cover rounded-[20px] w-[505px] h-[681px]" src={(data?.image && `http://localhost:5000/${data?.image}`) || authorImage} alt="Image" />
                        <div className="flex flex-col pt-[44px]">
                            <h3 className="author__title">
                                {data?.first_name} {data?.last_name}
                            </h3>
                            <p className="author__desc">
                                    {data?.bio}
                            </p>
                            <div className="flex gap-4 items-center">
                                <div className="flex flex-col">
                                    <p className="author__date-desc">{t("about_author.dob.title")}</p>
                                    <p className="author__year-desc">{data?.date_of_birth}</p>
                                    <p className="author__date-desc">{data?.country}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="author__line-desc">-</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="author__date-desc">{t("about_author.dod.title")}</p>
                                    <p className="author__year-desc">{data?.date_of_death}</p>
                                    <p className="author__date-desc">{data?.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AuthorBooks authorId={data?.id} />
                </div>
                {
                    pageLoader && <PageLoader />
                }
            </div>) : (pageLoader && <PageLoader />)
            }

            {
                error && <NotFound />
            }
        </>
  )
}
