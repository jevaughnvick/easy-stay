import logo from "./assets/easystaylogov2.png";
import heroPhoto from "./assets/hero-photo.png";
import pro from "./assets/professional.jpg";
import convenient from "./assets/convenient.PNG";
import reliable from "./assets/reliable.PNG";
import help from "./assets/help.PNG";

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
                    <button
                        className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                    rounded-lg"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="w-[1200px] h-[350px] absolute top-[550px] right-0 bottom-0 z-100 left-1/2 -translate-x-1/2 grid grid-cols-3 space-x-5">
                    <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between">
                        <img
                            src={pro}
                            alt=""
                            className="w-full object-cover rounded-lg h-[250px]"
                        />
                        <h2 className="text-3xl font-bold text-center">
                            Professional
                        </h2>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between">
                        <img
                            src={reliable}
                            alt=""
                            className="w-full object-cover rounded-lg h-[250px]"
                        />
                        <h2 className="text-3xl font-bold text-center">
                            Reliable
                        </h2>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between">
                        <img
                            src={convenient}
                            alt=""
                            className="w-full object-cover rounded-lg h-[250px] object-[50%_35%]"
                        />
                        <h2 className="text-3xl font-bold text-center">
                            Committed
                        </h2>
                    </div>
                </div>
                <section className="relative h-screen overflow-hidden">
                    <div className="relative z-10 h-full p-14 flex flex-col justify-center">
                        <h1 className="text-5xl font-display font-bold text-white w-fit">
                            Private Driver and<br></br>Personal Assistance
                            Service
                        </h1>
                        <p className="text-white text-lg mt-5 w-1/2">
                            Reliable private transport and concierge services
                            offering comfort, safety and peace of mind designed
                            for a smooth, stress-free experience in Jamaica. We
                            handle your transportation so you can focus on what
                            matters. Book easily via our website or get a quote
                            in seconds.
                        </p>
                        <div className="flex space-x-5 items-center justify-center font-bold mt-10 w-1/2">
                            <button
                                className="border border-amber-500 px-6 py-4 cursor-pointer
                                text-white rounded-lg"
                            >
                                Get a Quote
                            </button>
                            <button
                                className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                                rounded-lg"
                            >
                                Book Your Ride
                            </button>
                        </div>
                        <p className="flex space-x-5 justify-center text-white text-sm mt-2 w-1/2">
                            Professional Dependable Committed
                        </p>
                    </div>
                    <div
                        className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40
                    to-transparent z-1"
                    ></div>
                    <img
                        src={heroPhoto}
                        alt=""
                        className="absolute inset-0 scale-120 origin-left w-full h-full object-cover"
                    />
                </section>
            </div>

            <section className="h-[400px]"></section>

            <section className="bg-blue-500/10">
                <div className="px-14 py-30 flex">
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        <h1
                            className="text-5xl font-poppins font-bold text-white bg-blue-500
                        p-5 rounded-lg text-center"
                        >
                            Private Transport and Personal Assistance
                        </h1>
                        <p className="text-blue-600 text-xl text-center">
                            EasyStay Concierge provides reliable private
                            transport and concierge services in Kingston,
                            Jamaica. Ideal for those traveling alone or visiting
                            for the first time.
                        </p>
                        <div className="flex space-x-5 justify-center items-center font-bold">
                            <a href="" className="underline text-blue-600">
                                Learn More
                            </a>
                            <button
                                className="border border-blue-500 px-6 py-4 cursor-pointer text-blue-600
                            rounded-lg"
                            >
                                See What Our Clients Think
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div
                            className="p-5 rounded-lg bg-linear-to-bl
                        from-blue-500 via-transparent to-transparent"
                        >
                            <img
                                src={help}
                                alt=""
                                className="w-[400px] rounded-lg h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="px-14 py-30 flex flex-row-reverse">
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        <h1 className="text-5xl font-poppins font-bold text-[#b4955f] text-center">
                            Carefully Selected and Professionally Trained
                            Drivers
                        </h1>
                        <p
                            className="text-xl text-white bg-[#b4955f]
                        p-5 rounded-lg text-center"
                        >
                            All EasyStay drivers are professionally trained,
                            trustworthy and committed to providing a safe and
                            comfortable experience. Our team is carefully
                            selected to ensure professionalism, knowledge of
                            local areas and excellent customer service at all
                            times.
                        </p>
                        <div className="flex space-x-5 justify-center font-bold">
                            <button
                                className="border border-[#b4955f] px-6 py-4 cursor-pointer text-[#b4955f]
                            rounded-lg"
                            >
                                Leave a Review
                            </button>
                            <button
                                className="border bg-[#b4955f] px-6 py-4 cursor-pointer text-white
                            rounded-lg"
                            >
                                Rate My Driver
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div
                            className="p-5 rounded-lg bg-linear-to-br
                        from-[#b4955f] via-transparent to-transparent"
                        >
                            <img
                                src={help}
                                alt=""
                                className="w-[400px] rounded-lg h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-500/10">
                <div className="px-14 py-30 flex flex-col space-y-20 border border-red-500">
                    <div className="flex-1 flex flex-col justify-center space-y-5 border border-red-500">
                        <h1
                            className="text-5xl font-poppins font-bold text-white bg-slate-700
                        p-5 rounded-lg text-center"
                        >
                            Our Services
                        </h1>
                        <p className="w-1/2 text-slate-600 text-xl text-center mx-auto">
                            Choose a package designed around your schedule,
                            travel needs, and level of flexibility. Our services
                            are designed to provide a smooth, reliable, and
                            stress-free experience throughout your stay.
                        </p>
                    </div>
                    <div className="flex-1 border border-red-500">
                        <div className=""></div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default App;
