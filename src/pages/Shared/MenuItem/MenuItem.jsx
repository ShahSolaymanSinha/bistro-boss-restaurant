const MenuItem = ({ data }) => {
    return (
        <div>
            <div className="flex">
                <div>
                    <img className="rounded-tr-full rounded-br-full rounded-bl-full w-52" src={data?.image} alt="" />
                </div>
                <div className="ml-5">
                    <h3 className="text-2xl">{data?.name} ----------------</h3>
                    <p className="text-gray-500">{data?.recipe}</p>
                </div>
                <div>
                    <p className="text-[#BB8507]">${data?.price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
