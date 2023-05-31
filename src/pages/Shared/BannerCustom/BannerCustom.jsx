import bannerImg from "../../../assets/home/chef-service.jpg";

const BannerCustom = ({ color, heading, subHeading }) => {
    return (
        <div
            className="flex items-center justify-center mt-10 rounded-sm"
            style={{ backgroundImage: `url(${bannerImg})`, width: "100%", height: "500px" }}>
            <div className="my-40">
                <div className={`px-10 py-10 md:px-20 md:py-20 bg-${color} w-2/3 mx-auto rounded-sm`}>
                    <h3 className="text-center text-4xl font-semibold mb-2 uppercase">{heading}</h3>
                    <p className="text-center">{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerCustom;
