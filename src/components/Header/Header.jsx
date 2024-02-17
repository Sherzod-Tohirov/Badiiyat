import "./header.css";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import defaultImage from '../../assets/images/default.png'; 
import { useContext, useEffect, useState } from "react";
import { HeaderSubMenu } from "../HeaderSubMenu";
import { useTranslation } from "react-i18next";
import { tokenContext } from "../../context/tokenContext";
import axios from "axios";
import { PageLoader } from "../PageLoader";
export const Header = () => {
    const {token} = useContext(tokenContext);
    const [user, setUser] = useState(null);
    const [pageLoader, setPageLoader] = useState(false);
    useEffect(() => {
        setPageLoader(true);
        axios.defaults.headers.common['Authorization'] = token;
        axios.get('http://localhost:5000/user/me')
        .then(res => {
            setPageLoader(false);
            if(res?.status === 201) {
                setUser(res?.data);
            }
        })
        .catch(err => {
            setPageLoader(false);
            console.log(err)
        });
    }, []);
    const {t} = useTranslation();
    const [subListShow, setSubListShow] = useState(false);
    return (
    <>
         
       <header className='header pt-[33px] pb-[33px]'>
        <div className="container">
            <div className='flex items-center flex-wrap justify-between'>
                    <Link to={'/'}><img src={logo} width={102} height={38} /></Link>
                    <div className='flex items-center gap-[43px]'>
                        <ul className='list-none flex items-center gap-[22px]'>
                            <li>
                                <NavLink className={({isActive}) => `header__link ${isActive ? 'active-link' : ''}` } to={'/'}>{t("header.home")}</NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => `header__link ${isActive ? 'active-link' : ''}` } to={'/books'}>{t("header.books")}</NavLink>
                            </li>
                        </ul>
                        <div className="relative">
                            <button onClick={() => setSubListShow(prev => !prev)} className='header__btn'>
                                {
                                    user && <img className='rounded-full object-cover' src={(user?.image && `http://localhost:5000/${user?.image}`) ||  defaultImage} width={49} height={49} />
                                }
                            </button>
                            <HeaderSubMenu show={subListShow} setShow={setSubListShow} />
                        </div>
                    </div>
            </div>
        </div>
    </header>
    {
        pageLoader && <PageLoader />
    }
    
    </>
  )
}
