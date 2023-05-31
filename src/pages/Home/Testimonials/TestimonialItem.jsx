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
                    <div className="px-40 py-16">
                        <h2 className="text-gray-500 text-xl text-center mb-10">{data[0]?.details}</h2>
                        <h2 className="text-[#CD9004] text-5xl text-center font-semibold">{data[0]?.name}</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="px-40 py-16">
                        <h2 className="text-gray-500 text-xl text-center mb-10">{data[1]?.details}</h2>
                        <h2 className="text-[#CD9004] text-5xl text-center font-semibold">{data[1]?.name}</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="px-40 py-16">
                        <h2 className="text-gray-500 text-xl text-center mb-10">{data[2]?.details}</h2>
                        <h2 className="text-[#CD9004] text-5xl text-center font-semibold">{data[2]?.name}</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="px-40 py-16">
                        <h2 className="text-gray-500 text-xl text-center mb-10">{data[3]?.details}</h2>
                        <h2 className="text-[#CD9004] text-5xl text-center font-semibold">{data[3]?.name}</h2>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="px-40 py-16">
                        <h2 className="text-gray-500 text-xl text-center mb-10">{data[4]?.details}</h2>
                        <h2 className="text-[#CD9004] text-5xl text-center font-semibold">{data[4]?.name}</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TestimonialItem;
