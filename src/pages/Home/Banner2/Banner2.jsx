import bannerImg from "../../../assets/home/chef-service.jpg";
const Banner2 = () => {
    return (
        <div className="flex items-center justify-center mt-20" style={{ backgroundImage: `url(${bannerImg})`, width: "100%", height: "500px" }}>
            <div className="my-40">
                <div className="px-20 py-20 bg-white w-2/3 mx-auto">
                    <h3 className="text-center text-4xl font-semibold mb-2">BISTRO BOSS</h3>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis
                        praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
