import Categories from "./Categories";
import HomeCarousel from "./HomeCarousel";
import HomeNavBar from "./HomeNavBar";
import RetrievingProducts from "./RetrievingProducts";
import SearchBar from "./SearchBar";
import FooterNavbar from "../Footer/footerHome";
import ProductDisplay1 from "./ProductDisplay1";
import ProductDisplay2 from "./ProductDisplay2";

const Home = () => {
    return (
        <div className="homePage">
            <HomeNavBar />
            <HomeCarousel />
            <SearchBar />
            <Categories />
            <ProductDisplay1 />
            <ProductDisplay2 />
            <RetrievingProducts />
            <FooterNavbar />
        </div>
    );
}
 
export default Home;