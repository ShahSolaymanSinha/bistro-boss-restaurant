import BannerCustom from "../../Shared/BannerCustom/BannerCustom";
import Banner from "../Banner/Banner";
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
            <BannerCustom
                color={"white"}
                heading={"Bistro Boss"}
                subHeading={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                }
            />
            <Menu></Menu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <div className="mt-40">
                <Testimonials></Testimonials>
                <TestimonialItem></TestimonialItem>
            </div>
        </div>
    );
};

export default Home;
