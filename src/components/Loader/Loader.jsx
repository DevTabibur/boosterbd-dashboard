import LoaderImage from '../../Assets/images/Color-Loading-2.gif'
const Loader = () => {
    return (
        <>
            <div className="avatar grid place-items-center h-screen">
                <div className="w-56 relative rounded">
                    <img className=" w-full" src={LoaderImage} alt="Loader_image" />
                </div>
            </div>
        </>
    );
};

export default Loader;