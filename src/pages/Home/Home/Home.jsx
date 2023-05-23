import SectionTitle from "../../../components/SectionTitle";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Category from "../Category/Category";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SectionTitle subHeading={"From 11:00 Am To 10:00 PM"} heading={"Order Online"}></SectionTitle>
            <Category></Category>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;
