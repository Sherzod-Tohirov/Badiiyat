import { Header } from "../../components/Header"
import {MainSlider} from "../../components/MainSlider/MainSlider"
import { Search } from "../../components/Search"
import { Categories } from "../../components/Categories"

export const Home = () => {
  return (
    <>
        <Header />
        <MainSlider />
        <Search style={"relative top-[-78px] mb-[19px]"} />
        <Categories />
    </>
  )
}
