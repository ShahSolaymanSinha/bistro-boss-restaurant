import LazyLoad from "react-lazyload";

const Card = ({ data }) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl text-center">
            <figure>
                <LazyLoad height={"500"}>
                    <img src={data?.image} alt={data?.name} />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title flex justify-center">{data?.name}</h2>
                <p>{data?.recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-[#E8E8E8] border-b-2 border-l-0 border-r-0 border-t-0 text-[#BB8507] border-[#BB8507]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
