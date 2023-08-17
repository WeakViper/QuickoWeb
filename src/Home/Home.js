import Categories from "./Categories";
import HomeCarousel from "./HomeCarousel";
import HomeNavBar from "./HomeNavBar";
import SearchBar from "./SearchBar";

const Home = () => {
    return (
        <div className="homePage">
            <HomeNavBar />
            <HomeCarousel />
            <SearchBar />
            <Categories />
        </div>
    );
}
 
export default Home;