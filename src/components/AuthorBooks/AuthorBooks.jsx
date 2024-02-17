import { useTranslation } from "react-i18next";
import { BookCard } from "../BookCard"
import "./authorbooks.css";
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../context/tokenContext";
import axios from "axios";
import { NotFound } from "../NotFound";
export const AuthorBooks = ({authorId}) => {
  const {t} = useTranslation();
  const {token} = useContext(tokenContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token;
    axios.get(`http://localhost:5000/author/books/${authorId}`)
    .then(res => {
       if(res?.status === 201) {
           setData(res?.data);
       }
    })
    .catch(err => console.log(err));
  }, [authorId])
  return (
    <div className="flex flex-col gap-[30px] pb-[120px]">
        <div className="flex items-center justify-between">
            <h4 className="authorbooks__title">{t("author_books.title")}</h4>
            <button className="authorbooks__btn">
            {t("author_books.button.title")}
            </button>
        </div>
        <ul className="authorbooks__list">
          {
            data?.length ? (data?.map(item => {
              return <BookCard key={item?.id} data={item} />
            })) : <NotFound />
          }
        </ul>
    </div>
  )
}
