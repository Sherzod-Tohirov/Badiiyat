import "./main.css";
import { MainCard } from "../../components/MainCard";
import { CategoryList } from "../../components/CategoryList";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NotFound } from "../../components/NotFound";
import { PageLoader } from "../../components/PageLoader";
import { searchContext } from "../../context/searchContext";
export const Main = () => {
  const [data, setData] = useState([]);
  const [genreId, setGenreId] = useState(1);
  const [pageLoader, setPageLoader] = useState(false);
  const {search} = useContext(searchContext);
  useEffect(() => {
    setPageLoader(true);
    axios.get(`http://localhost:5000/author/genreId/${genreId}`)
    .then(res => {
      if(res.status === 201) {
        setData(res?.data);
        setPageLoader(false);
      }
    })
    .catch(err => {
      console.log(err)
      setPageLoader(false); 
    });
  }, [genreId])

  useEffect(() => {
    setPageLoader(true);
    axios.get(`http://localhost:5000/author/search/${search}`)
    .then(res => {
      setPageLoader(false);
      if(res?.status === 201) { 
        setData(res?.data);
      }
    })
    .catch(err => {
      setPageLoader(false);
      setData([]);
      console.log(err);
    });
  }, [search])
  return (
    <div className="main">
      <div className="container">
          <div className="flex flex-col gap-[30px] items-center justify-center">
              <CategoryList {...{setGenreId, genreId}} />
              <ul className="main__card-list">
                 {
                  data?.length ? data.map(item => {
                    return <MainCard key={item?.id} data={item} />
                  }) : <NotFound />
                 }
              </ul>
          </div>
      </div>
      {
        pageLoader && <PageLoader />
      }
    </div>
  )
}
