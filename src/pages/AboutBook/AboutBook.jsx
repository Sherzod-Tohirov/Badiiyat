import "./aboutbook.css";
import bookImage from "../../assets/images/book-default.png";
import { AuthorBooks } from "../../components/AuthorBooks";
import { Header } from "../../components/Header";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../context/tokenContext";
import { NotFound } from "../404/NotFound";
import { PageLoader } from "../../components/PageLoader";

export const AboutBook = () => {
  const {t} = useTranslation();
  const {id} = useParams();
  const {token} = useContext(tokenContext);
  const [pageLoader, setPageLoader] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    setPageLoader(true);
    axios.defaults.headers.common['Authorization'] = token;
    axios.get(`http://localhost:5000/book/bookId/${id}`)
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
    })
  }, [id]);
  return (
    <>
      <Header />
      {
        Object.keys(data)?.length ? (<div className="aboutbook">
        <div className="container">
          <div className="flex gap-[64px] mb-[100px]">
            <img
              className="object-cover rounded-[20px] w-[505px] h-[681px]"
              src={data?.image ? `http://localhost:5000/${data?.image}` : bookImage}
              alt="Image"
            />
            <div className="flex flex-col pt-[44px] flex-grow">
              <h3 className="aboutbook__title">{data?.title}</h3>
              <div className="flex flex-col gap-[14px] mb-[40px]">
                <div className="flex items-center justify-between">
                  <p className="aboutbook__info-desc">{t("about_book.pages.title")}:</p>
                  <p className="aboutbook__info-data">{data?.page} {t("about_book.pages.sub_title")}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="aboutbook__info-desc">{t("about_book.printed_at.title")}:</p>
                  <p className="aboutbook__info-data">{data?.year} {t("about_book.printed_at.sub_title")}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="aboutbook__info-desc">{t("about_book.price.title")}:</p>
                  <p className="aboutbook__info-data">{t("about_book.price.sub_title.en")}{data?.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-[19px] mb-3">
                <span className="aboutbook__add-desc">{t("about_book.info.title")}</span>
                <span className="aboutbook__line"></span>
              </div>
              <div className="flex flex-col gap-6">
                <p className="aboutbook__desc">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
          <AuthorBooks authorId={data?.author_id} />
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
  );
};
