import "./maincard.css";
import defaultImg from '../../assets/images/default-card.png'
import { Link } from "react-router-dom";
export const MainCard = ({data}) => {
  return (
    <li className="maincard__item">
        <Link className="maincard__link" to={`/author/${data?.id}`}>
            <img className="maincard__img object-cover w-[295px] h-[224px]" src={(data?.image && `http://localhost:5000/${data?.image}`) || defaultImg} alt="Image" />
            <div className="maincard__details">
                <h3 className="maincard__title">
                    {data?.first_name} {data?.last_name}
                </h3>
                <p className="maincard__desc">
                    {data?.date_of_birth}-{data?.date_of_death}
                </p>
            </div>
        </Link>
    </li>
  )
}
