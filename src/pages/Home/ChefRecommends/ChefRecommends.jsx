import SectionTitle from "../../../components/SectionTitle";
import useMenuLoader from "../../../utils/useMenuLoader";
import Card from "../../Shared/Card/Card";

const ChefRecommends = () => {
    const [data] = useMenuLoader();
    return (
        <div>
            <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {data.slice(0, 6).map((singleData) => (
                    <Card key={singleData?._id} data={singleData}></Card>
                ))}
            </div>
        </div>
    );
};

export default ChefRecommends;
