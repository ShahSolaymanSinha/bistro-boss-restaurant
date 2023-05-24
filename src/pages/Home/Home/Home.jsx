import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Banner2></Banner2>
            <Menu></Menu>
            <CallUs></CallUs>
        </div>
    );
};

export default Home;
