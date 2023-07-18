

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-4">
            <p className="text-yellow-400">---{subHeading}---</p>
            <h3 className="text-4xl uppercase py-4 border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;