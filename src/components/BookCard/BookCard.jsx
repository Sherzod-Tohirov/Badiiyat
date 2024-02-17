import "./bookcard.css";
import bookCardImage from "../../assets/images/bookcard-default.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../context/tokenContext";
import { PageLoader } from "../PageLoader";
export const BookCard = ({data}) => {
  const {token} = useContext(tokenContext);
  const [author, setAuthor] = useState(null);
  const [pageLoader, setPageLoader] = useState(false);
  useEffect(() => {
    setPageLoader(true);
    axios.defaults.headers.common['Authorization'] = token;
    axios.get(`http://localhost:5000/author/authorId/${data?.author_id}`)
    .then(res => {
      setPageLoader(false);
       if(res?.status === 201) { 
          setAuthor(res?.data);
       }
    })
    .catch(err => {
      setPageLoader(false);
      console.log(err);
    })
  }, []);
  return (
    <>
      <li className="bookcard__item">
          <Link className="bookcard__link" to={`/book/${data?.id}`}>
              <img className="object-cover rounded-[14px] w-[190px] h-[283px]" src={(data?.image && `http://localhost:5000/${data?.image}`) || bookCardImage} alt="Image" />
              <div className="bookcard__details">
                  <h3 className="bookcard__title">{data?.title}</h3>
                  <p className="bookcard__desc">{author?.first_name} {author?.last_name}</p>
              </div>
          </Link>
      </li>
      {
        pageLoader && <PageLoader />
      }
    </>
  )
}
