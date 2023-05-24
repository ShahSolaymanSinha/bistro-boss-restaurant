import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";
import { btnStyle } from "../../../utils/smallParts";
import useMenuLoader from "../../../utils/useMenuLoader";
import { useState } from "react";

const Menu = () => {
    const [data] = useMenuLoader();
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="mb-20">
            <SectionTitle heading={"From our menu"} subHeading={"Check it out"}></SectionTitle>
            <div id="menu" className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
                {isExpanded == false
                    ? data.slice(0, 6).map((data) => <MenuItem key={data?._id} data={data}></MenuItem>)
                    : data.map((data) => <MenuItem key={data?._id} data={data}></MenuItem>)}
            </div>
            <div className="flex justify-center mt-5">
                <button
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                        navigate("#menu");
                    }}
                    className={btnStyle}>
                    {isExpanded == false ? "View Full Menu" : "View Less Menu"}
                </button>
            </div>
        </div>
    );
};

export default Menu;
