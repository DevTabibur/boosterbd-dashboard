import img from "../../Assets/images/big.svg";
import tiktok from "../../Assets/icons/tiktok.png";
import star from "../../Assets/images/star.png";
const Hero = () => {
    return (
        <div className="container mx-auto px-4 lg:flex gap-24 mt-3">
            <div className="max-w-[550px] w-full md:mt-20 mt-9 ">
                <h1 className="text-black lg:text-[50px] md:text-[39px] text-3xl font-bold  font-evolventa lg:leading-[70px] md:leading-5  tracking-normal">
                    Profitable
                    <br className="lg:block hidden" /> payment for
                    <br /> advertising in social
                    <br className="lg:block hidden" /> networks
                </h1>
                <p className="text-[19px] font-arial font-normal text-[#0B0000] my-8">
                    Advanced budget management and support from certified experts
                </p>
                <div className="flex  gap-5">
                    <button className="w-[105px] bg-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold text-white">
                        Sign up
                    </button>
                    <button className="w-[177px] text-[#F4A72D] h-12 rounded-[7px] text-base font-arial font-bold  border border-[#F4A72D]">
                        Sign up for a demo
                    </button>
                </div>
                <img src={tiktok} className="mt-12" alt="" />
            </div>
            <div className="relative -z-50">
                <img src={img} className="h-[625px]" alt="" />
                <div className="absolute bottom-0 right-0 -z-50">
                    <img src={star} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
