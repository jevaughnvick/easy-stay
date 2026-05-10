import logo from "./assets/easystaylogov2.png";
import heroPhoto from "./assets/hero-photo.png";

function App() {
    return (
        <>
            <div className="border border-gray-500/20 px-14 py-5 grid grid-cols-3">
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
        </>
    );
}
export default App;
