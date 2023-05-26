// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

const TestimonialItem = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <h2>{data[0]?.details}</h2>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TestimonialItem;
