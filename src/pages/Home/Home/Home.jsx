import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Menu from "../Menu/Menu";
import TestimonialItem from "../Testimonials/TestimonialItem";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Banner2></Banner2>
            <Menu></Menu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <div>
                <Testimonials></Testimonials>
                <TestimonialItem></TestimonialItem>
            </div>
        </div>
    );
};

export default Home;
