import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';

const Banner = () => {
    return (
        <div className='container'>
            <div className="carousel w-full lg:h-[520px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className=" absolute rounded-xl flex justify-between items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-3  md:space-y-7 p-2 md:pl-6 lg:pl-12 md:w-2/3 text-center md:text-start'>
                            <h2 className='text-[17px] md:text-4xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm md:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-2 md:gap-5  items-center justify-center md:justify-start w-full'>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Discover More</button>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute flex gap-3 justify-end transform md:-translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❮</a>
                        <a href="#slide2" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className=" absolute rounded-xl flex justify-between items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-3  md:space-y-7 p-2 md:pl-6 lg:pl-12 md:w-2/3 text-center md:text-start'>
                            <h2 className='text-[17px] md:text-4xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm md:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-2 md:gap-5  items-center justify-center md:justify-start w-full'>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Discover More</button>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute flex gap-3 justify-end transform md:-translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❮</a>
                        <a href="#slide3" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className=" absolute rounded-xl flex justify-between items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-3  md:space-y-7 p-2 md:pl-6 lg:pl-12 md:w-2/3 text-center md:text-start'>
                            <h2 className='text-[17px] md:text-4xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm md:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-2 md:gap-5  items-center justify-center md:justify-start w-full'>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Discover More</button>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute flex gap-3 justify-end transform md:-translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❮</a>
                        <a href="#slide4" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className=" absolute rounded-xl flex justify-between items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-3  md:space-y-7 p-2 md:pl-6 lg:pl-12 md:w-2/3 text-center md:text-start'>
                            <h2 className='text-[17px] md:text-4xl xl:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm md:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-2 md:gap-5  items-center justify-center md:justify-start w-full'>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Discover More</button>
                                <button className=" px-2 md:px-5 py-1 md:py-3 rounded-md bg-primaryColor uppercase text-sm md:text-xl  font-semibold border border-primaryColor hover:text-primaryColor hover:bg-whiteColor transition-all duration-300">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className=" absolute flex gap-3 justify-end transform md:-translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❮</a>
                        <a href="#slide1" className="bg-primaryColor text-white flex justify-center items-center w-5 h-5 md:w-12 md:h-12 md:text-xl  text-sm rounded-full hover:bg-whiteColor hover:text-primaryColor border border-primaryColor transition-all duration-300">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;