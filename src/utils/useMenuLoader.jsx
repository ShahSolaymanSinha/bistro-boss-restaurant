import { useEffect, useState } from "react";

const useMenuLoader = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
    }, []);
    return [data, setData];
};

export default useMenuLoader;
