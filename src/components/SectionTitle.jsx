const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="text-center md:w-4/12 mx-auto mb-10 mt-10">
            <p className="text-[#D99906] mb-3">--- {subHeading} ---</p>
            <h2 className="text-4xl uppercase border-y-4 py-5 font-semibold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;
