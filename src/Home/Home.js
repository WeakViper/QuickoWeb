import Categories from "./Categories";
import HomeCarousel from "./HomeCarousel";
import HomeNavBar from "./HomeNavBar";
import RetrievingProducts from "./RetrievingProducts";
import SearchBar from "./SearchBar";
import FooterNavbar from "./footerHome";

const Home = () => {
    return (
        <div className="homePage">
            <HomeNavBar />
            <HomeCarousel />
            <SearchBar />
            <Categories />
            <RetrievingProducts />
            <FooterNavbar />
        </div>
    );
}
 
export default Home;