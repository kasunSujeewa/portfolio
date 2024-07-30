import Logos from "./Logos";


function Footer() {
    return (
        <div className="fixed bottom-0 w-full grid grid-cols-1 sm:grid-cols-3 bg-gray-700 py-1 border border-t-green-600 items-center">
            <div></div>
            <div className="grid grid-cols-6 lg:grid-cols-10 gap-1 py-3">
                <div className="grid col-span-1 sm:col-span-1 lg:col-span-3"></div>
                {
                    Logos.map((logo, index) => {
                        return (<img src={logo.src} key={index} className="size-8" />)
                    })
                }
                <div className="rid sm:col-span-1 lg:col-span-3"></div>
            </div>
            <div></div>
            <div></div>

            <div className="md:grid md:grid-cols-1 md:gap-1 md:text-center hidden">
                <div className="grid" >
                    <span className="font-black">
                        Portfolio Version 1 Powered By
                    </span>
                </div>
                <div className="grid">
                    <a href="#" className="text-yellow-300">thecoolcode.com</a>
                </div>
            </div>
            <div></div>


        </div>
    );
}

export default Footer;