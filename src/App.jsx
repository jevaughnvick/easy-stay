import logo from "./assets/easystaylogov2.png";
import heroPhoto from "./assets/hero-photo.png";
import pro from "./assets/professional.jpg";
import convenient from "./assets/convenient.PNG";
import reliable from "./assets/reliable.PNG";
import help from "./assets/help.PNG";
import footerLogo from "./assets/easystaylogogray.PNG";


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
                    <a href="">Reviews</a>
                    <a href="">Contact</a>
                    <a href="">About Us</a>
                </div>
                <div className="flex items-center space-x-5 justify-end font-bold">
                    <a href="" className="underline text-amber-600">
                        Get a Quote
                    </a>
                    <button
                                className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                                rounded-lg transition-all duration-200
                                bg-[linear-gradient(110deg,#b8860b,45%,#f1c40f,75%,#b8860b)]
                                hover:scale-105
                                hover:shadow-[0_0_20px_rgba(184,134,11,0.5)]
                                hover:bg-[length:200%_200%]
                                active:scale-95"
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
                                className="bg-amber-500 px-6 py-4 cursor-pointer
                                text-white rounded-lg"
                            >
                                Leave a Review
                            </button>
                            <button
                                className="bg-amber-500 px-6 py-4 cursor-pointer text-white
                                rounded-lg tracking-widest transition-all duration-200
                                bg-[linear-gradient(110deg,#b8860b,45%,#f1c40f,85%,#b8860b)]
                                hover:scale-105
                                hover:shadow-[0_0_20px_rgba(184,134,11,0.5)]
                                hover:bg-[length:150%_200%]
                                active:scale-95"
                            >
                                Book Your Ride
                            </button>
                            {/* bg-[length:200%_100%] */}
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
                            transport and concierge services in Jamaica. Ideal for those traveling alone or visiting
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
                        <div className="flex justify-center font-bold">
                            <button
                                className="border border-[#b4955f] px-6 py-4 cursor-pointer text-[#b4955f]
                            rounded-lg"
                            >
                                Leave a Review
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
            <section className="bg-yellow-500/10">
                <div className="px-14 py-30 flex">
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        <h1
                            className="text-5xl font-poppins font-bold text-white bg-yellow-500
                        p-5 rounded-lg text-center"
                        >
                            Always On Time. Always There for You.
                        </h1>
                        <p className="text-yellow-600 text-xl text-center">
                            We pride ourselves in providing a seamless experience without inconveniences, frustration or pain. No hidden fees, no hiccups, no worries.
                        </p>
                        <div className="flex space-x-2 justify-center items-center">
                            <p className="text-yellow-600 text-xl text-center">
                            Questions?
                        </p>
                            <button
                                className="border border-yellow-500 px-6 py-4 cursor-pointer 
                            font-bold text-yellow-600
                            rounded-lg"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                        <div
                            className="p-5 rounded-lg bg-linear-to-bl
                        from-yellow-500 via-transparent to-transparent"
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
                <div className="px-14 py-30 flex flex-col space-y-20">
                    <div className="flex-1 flex flex-col justify-center space-y-5">
                        <h1
                            className="text-5xl font-poppins font-bold text-white bg-slate-700
                        p-5 rounded-lg text-center"
                        >
                            Our Services
                        </h1>
                        <p className="w-1/2 text-slate-600 text-xl text-center mx-auto">
                            Our services are designed to provide a smooth,
                            reliable, and stress-free experience throughout your
                            stay. Choose a package designed around your
                            schedule, travel needs, and level of flexibility.
                        </p>
                        <ul className="w-1/2 text-slate-600 text-xl text-center mx-auto font-bold flex space-x-5">
                            <li>
                                <p>Sedan &#40;1-2 persons&#41;</p>
                            </li>
                            <li>
                                <p>SUV &#40;1-2 persons&#41;</p>
                            </li>
                            <li>
                                <p>Van &#40;5-8 persons&#41;</p>
                            </li>
                        </ul>
                        <p className="w-1/2 text-slate-600 text-xl text-center mx-auto font-bold">
                            All-inclusive services. No hidden fees. Fuel, tolls
                            and parking are all covered.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="h-[500px] bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between text-xl hover:scale-105 transition-all transition-duration-200">
                            <div className="space-y-5">
                                <h3 className="bg-slate-700 p-2 text-white font-bold text-center text-xl">
                                    One &#40;1&#41; Day Concierge<br></br>
                                    &#40;Kingston&#41;
                                </h3>
                                <ul>
                                    <li>
                                        <p>
                                            Private driver available up to 8PM
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Airport pickup or drop-off
                                            &#40;Kingston&#41;
                                        </p>
                                    </li>
                                    <li>
                                        <p>Indefinite waiting during appointments</p>
                                    </li>
                                    <li>
                                        <p>
                                            Flexible daily schedule within
                                            Kingston
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-end">
                                <p className="flex items-center">
                                    Starting from
                                    <span className="text-green-600 font-bold text-2xl ml-1 mr-1 ">
                                        300
                                    </span>
                                    USD/ day
                                </p>
                            </div>
                        </div>
                        <div className="h-[500px] bg-white border-4 border-slate-700 p-5 rounded-lg shadow-xl flex flex-col justify-between text-xl hover:scale-105 transition-all transition-duration-200">
                            <div className="space-y-5">
                                <h3 className="bg-slate-700 p-2 text-white font-bold text-center text-xl">
                                    Two &#40;2&#41; to Three &#40;3&#41; Day
                                    <br></br>Concierge
                                </h3>
                                <ul>
                                    <li>
                                        <p>
                                            Private driver available up to 8PM
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Airport pickup or drop-off
                                            &#40;Kingston&#41;
                                        </p>
                                    </li>
                                    <li>
                                        <p>Indefinite waiting during appointments</p>
                                    </li>
                                    <li>
                                        <p>Flexible daily schedule</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-end">
                                <p className="flex items-center">
                                    Starting from
                                    <span className="text-green-600 font-bold text-2xl ml-1 mr-1 ">
                                        280
                                    </span>
                                    USD/ day
                                </p>
                            </div>
                        </div>
                        <div className="h-[500px] bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between text-xl hover:scale-105 transition-all transition-duration-200">
                            <div className="space-y-5">
                                <h3 className="bg-slate-700 p-2 text-white font-bold text-center text-xl">
                                    Airport/ Short <br></br>Services
                                </h3>
                                <ul>
                                    <li>
                                        <p>
                                            Airport pickup or drop-off
                                            &#40;Kingston&#41;
                                        </p>
                                    </li>
                                    <li>
                                        <p>1-2 stops if needed</p>
                                    </li>
                                    <li>
                                        <p>Professional driver assistance</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-end">
                                <p className="flex items-center">
                                    Starting from
                                    <span className="text-green-600 font-bold text-2xl ml-1 mr-1 ">
                                        130
                                    </span>
                                    USD/ day
                                </p>
                            </div>
                        </div>
                        <div className="h-[500px] bg-white p-5 rounded-lg shadow-xl flex flex-col justify-between text-xl hover:scale-105 transition-all transition-duration-200">
                            <div className="space-y-5">
                                <h3 className="bg-slate-700 p-2 text-white font-bold text-center text-xl">
                                    Out-of-Town <br></br>Services
                                </h3>
                                <p>
                                    We offer private concierge transport beyond
                                    Kingston, tailored to your schedule and
                                    travel needs.
                                </p>
                                <p>
                                    <a
                                        href=""
                                        className="underline text-slate-700"
                                    >
                                        Contact us
                                    </a>{" "}
                                    to arrange your itinerary and receive a
                                    custom quote.
                                </p>
                                <p>
                                    Minimum booking requirements may apply for
                                    out-of-town services
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <p className="flex items-center">
                                    Available upon request
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-slate-500/10">
                <div className="h-[500px] text-gray-700 flex flex-col justify-between">
                    <div className="px-14 py-14">
                        <div className="grid grid-cols-4">
                            <div className="">
                                <a href="/">
                                <img src={footerLogo} alt="" width="170px" />
                                </a>
                            </div>
                            <div className="">
                                <ul className="space-y-5">
                                    <li>
                                        <p className="text-xl font-bold">
                                            Company
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">About</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Reviews</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Contact</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="space-y-5">
                                    <li>
                                        <p className="text-xl font-bold">
                                            Resources
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Blog</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Booking Form</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Trip Cost Calculator</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <ul className="space-y-5">
                                    <li>
                                        <p className="text-xl font-bold">
                                            Legal
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Privacy Policy</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a className="hover:underline" href="/">Terms of Service</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            
                    </div>
                    <p className="text-center text-sm">
                        &copy; 2026 EasyStay Concierge Ltd. All Rights Reserved
                    </p>
                </div>
            </footer>
        </>
    );
}
export default App;
