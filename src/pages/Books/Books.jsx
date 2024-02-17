import "./book.css";
import { BookCard } from "../../components/BookCard";
import { CategoryList } from "../../components/CategoryList";
import { useEffect, useState } from "react";
import axios from "axios";
import { NotFound } from "../../components/NotFound";
import { PageLoader } from "../../components/PageLoader";
export const Books = () => {
  const [genreId, setGenreId] = useState(1);
  const [data, setData] = useState([]);
  const [pageLoader, setPageLoader] = useState(false);
  useEffect(() => {
    setPageLoader(true);
    axios.get(`http://localhost:5000/book/genreId/${genreId}`)
    .then(res => {
        setPageLoader(false);
        if(res?.status === 201) {
            setData(res?.data);
        }
    })
    .catch(err => {
      setPageLoader(false);
      console.log(err);
    });
  }, [genreId]);
  return (
    <>
      <div className="bookcard">
        <div className="container">
            <div className="flex flex-col gap-[30px] items-center justify-center">
                <CategoryList {...{genreId, setGenreId}} />
                <ul className="bookcard__list">
                   {
                    data?.length ? (
                      data?.map(item => {
                        return <BookCard key={item?.id} data={item} />
                      })
                    ) : <NotFound />
                   }
                </ul>
            </div>
        </div>
      </div>
      {
        pageLoader && <PageLoader />
      }
    
    </>
  )
}
