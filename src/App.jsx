import logo from './assets/easystaylogov2.png'


function App() {
    return (
        <>
        <div className="border border-gray-500/20 px-12.5 py-5 grid grid-cols-3">
            <div className=''>
                <a href="/"><img src={logo} alt="" width="110px" /></a>
            </div>
            <div className="space-x-5 font-bold text-gray-700 flex justify-center items-center">
                <a href="">Packages</a>
                <a href="">Contact</a>
                <a href="">About Us</a>
            </div>
            <div className="flex items-center space-x-5 justify-end">
                <a href="" className='underline font-bold text-amber-600'>Get a Quote</a>
                <button className="bg-amber-500 px-6 py-4 cursor-pointer text-white rounded-lg font-bold">
                    Book Your Ride
                </button>
            </div>
        </div>
        </>
    );
}
export default App;
