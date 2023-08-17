import Categories from "./Categories";
import HomeCarousel from "./HomeCarousel";
import HomeNavBar from "./HomeNavBar";
import RetrievingProducts from "./RetrievingProducts";
import SearchBar from "./SearchBar";

const Home = () => {
    return (
        <div className="homePage">
            <HomeNavBar />
            <HomeCarousel />
            <SearchBar />
            <Categories />
            <RetrievingProducts />
        </div>
    );
}
 
export default Home;