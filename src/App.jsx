import logo from "./assets/easystaylogov2.png";
import heroPhoto from "./assets/hero-photo.png";
import pro from "./assets/professional.jpg";
import convenient from "./assets/convenient.PNG";
import reliable from "./assets/reliable.PNG";

function App() {
    return (
        <>
            <div className="border border-gray-500/20 px-14 py-5 grid grid-cols-3 shadow-lg">
                <div className="">
                    <a href="/">
                        <img src={logo} alt="" width="110px" />
                    </a>
                </div>
                <div className="space-x-5 font-bold text-gray-700 flex justify-center items-center">
                    <a href="">Services</a>
                    <a href="">Packages</a>
                    <a href="">Contact</a>
                    <a href="">About Us</a>
                </div>
                <div className="flex items-center space-x-5 justify-end font-bold">
                    <a href="" className="underline text-amber-600">
                        Get a Quote
                    </a>
                    <button className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                    rounded-lg">
                        Book Now
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="w-[1200px] h-[350px] absolute top-[550px] right-0 bottom-0 z-100 left-1/2 -translate-x-1/2 grid grid-cols-3 space-x-5">
                    <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between">
                        <img src={pro} alt="" className="w-full object-cover rounded-lg h-[250px]" />
                        <h2 className="text-3xl font-bold text-center">
                            Professional
                        </h2>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between">
                        <img src={reliable} alt="" className="w-full object-cover rounded-lg h-[250px]" />
                        <h2 className="text-3xl font-bold text-center">
                            Reliable
                        </h2>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between">
                        <img src={convenient} alt="" className="w-full object-cover rounded-lg h-[250px] object-[50%_35%]" />
                        <h2 className="text-3xl font-bold text-center">
                            Committed
                        </h2>
                    </div>
                </div>
                <section className="relative h-screen overflow-hidden">
                    <div className="relative z-10 h-full p-14 flex flex-col justify-center">
                                <h1 className="text-5xl font-display font-bold text-white w-fit">
                                    Private Driver and<br></br>Personal Assistance Service
                                </h1>
                                <p className="text-white text-lg mt-5 w-1/2">
                                    Reliable private transport and concierge services offering comfort, safety and peace of mind designed for a smooth, stress-free experience in Jamaica. We handle your transportation so you can focus on what matters.
                                </p>
                                <div className="flex space-x-5 items-center justify-center font-bold mt-10 w-1/2">
                                    <button className="border border-amber-500 px-6 py-4 cursor-pointer
                                    text-white rounded-lg">
                                        Get a Quote
                                    </button>
                                    <button className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                                    rounded-lg">
                                        Book Your Ride
                                    </button>
                                </div>
                                <p className="flex space-x-5 justify-center text-white text-sm mt-2 w-1/2">
                                    Professional Dependable Committed
                                </p>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40
                    to-transparent z-1"></div>
                    <img
                        src={heroPhoto}
                        alt=""
                        className="absolute inset-0 scale-120 origin-left w-full h-full object-cover"
                    />
                </section>
                <section className="relative">
                    <div className="px-14 py-30">
                    </div>
                </section>
            </div>
        </>
    );
}
export default App;
