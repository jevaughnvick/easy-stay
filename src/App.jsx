import logo from "./assets/easystaylogov2.png";
import heroPhoto from "./assets/hero-photo.png";

function App() {
    return (
        <>
            <div className="border border-gray-500/20 px-12.5 py-5 grid grid-cols-3">
                <div className="">
                    <a href="/">
                        <img src={logo} alt="" width="110px" />
                    </a>
                </div>
                <div className="space-x-5 font-bold text-gray-700 flex justify-center items-center">
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
                        Book Your Ride
                    </button>
                </div>
            </div>

            <section className="relative h-screen overflow-hidden">
                <div className="relative z-10 h-full p-12.5 flex flex-col justify-center">
                    <h1 className="text-6xl font-display font-bold text-white">
                        Private Driver and<br></br>Personal Assistance Service
                    </h1>
                    <p className="text-white font-poppins text-lg w-1/2 mt-5">
                        Reliable private transport and concierge services offering comfort, safety and peace of mind designed for a smooth, stress-free experience in Jamaica. We handle your transportation so you can focus on what matters.
                    </p>
                    <div className="flex space-x-5 items-center justify-center font-bold w-[calc(50%-50px)] mt-10">
                        <button className="border border-amber-500 px-6 py-4 cursor-pointer text-white
                        rounded-lg">
                            Get a Quote
                        </button>
                        <button className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                        rounded-lg">
                            Book Your Ride
                        </button>
                    </div>
                    <p className="flex space-x-5 justify-center text-white text-sm w-[calc(50%-50px)] mt-2">
                        Professional Dependable Committed
                    </p>
                </div>
                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40
                to-transparent z-1"></div>
                <img
                    src={heroPhoto}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </section>
        </>
    );
}
export default App;
