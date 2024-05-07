const Contacts = () => {
    return (
    <div className="p-4 sm:ml-64">
        <div className="text-white text-center">
            <a href="https://gjc-auth.vercel.app/books" className="cursor-pointer md:hidden lg:hidden">
                <div className="mb-3 rounded-md px-4 py-2 w-full lg:w-80 bg-blue-500 hover:bg-green-700 focus:outline-none focus:bg-green-700 text-white text-center">
                <p className="font-bold text-2xl">GJC students can view books now</p>
                <p>Thanks for proceeding in this button</p>
                </div>
            </a>
            <a href="https://gjc-auth.vercel.app/auth/login" className="cursor-pointer md:hidden lg:hidden">
                <div className="rounded-md px-4 py-2 w-full lg:w-80 bg-green-500 hover:bg-green-700 focus:outline-none focus:bg-green-700 text-white text-center">
                    <p className="font-bold text-2xl">GJC students can login now</p>
                    <p>No hard process required. Connect anytime.</p>
                </div>
            </a> 
            <p className="font-medium text-6xl">Contact us for any inquiry</p>
            <p className="text-2xl mt-6">+639 087 2345 234</p>
            <p className="text-2xl">+639 541 0000 234</p>
        </div>
        <div className="flex font-semibold space-x-1 justify-center mt-8">
            <button className="rounded-md px-4 py-2 bg-white hover:bg-green-500 focus:outline-none
            focus:bg-green-500">Link to our Gmail <i className="fas fa-arrow-right"></i></button>
            <button className="rounded-md px-4 py-2 bg-blue-700 hover:bg-blue-900 focus:outline-none
            focus:bg-blue-900 text-white">Link to our Facebook <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="mt-8">
            <span className="text-orange-400">For our beloved students: </span>
            <span className="text-white">"Spamming never pays off in the long run. Instead of cluttering inboxes and timelines, 
            let's focus on meaningful connections and valuable content. Respect others' digital space and contribute 
            positively to online communities. Quality over quantity always wins."</span>
            <p className="text-white font-semibold mt-4">Keep updated with our library resources <i className="fas fa-arrow-right"></i></p>
        </div>
        <div className="flex mt-2">
            <input type="email" placeholder="Email address" className="rounded-l-md px-8" /><button className="rounded-r-md px-4 py-2
            bg-yellow-300 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 font-semibold">Subscribe for 
            news</button>
            <button className="rounded-md px-4 py-2 bg-green-500 hover:bg-green-700 focus:outline-none
            focus:bg-green-700 text-white ml-4">Click here for more info <i className="fas fa-arrow-right"></i></button>
        </div>
        <div className="mt-7">
            <span className="text-orange-400">Did you know? </span>
            <span className="text-white">Everyday more and more students are reaching out this brand new platform. By
                subscribing to our newsletter, you can be one of them, GJC official student email is needed.
            </span>
        </div>
        <div className="static mt-7">
            <button className="rounded-t-md bg-teal-600 opacity-60 text-teal-600 px-4 pb-2">Send us a quick message</button>
            <span  className="ml-3 mt-2 absolute left-0 text-white ">Send us a quick message</span>
        </div>
   
        <div className="static">
            <div className="w-3/4 p-4 bg-teal-600 opacity-60 h-40">
            </div>
            {/* <!-- <textarea className="absolute top-60 mt-1 ml-8 w-4/6 h-32 p-2 focus:outline-blue border-10 border-cyan-950" placeholder="Enter text here..."></textarea> --> */}
        </div>
   
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="text-white text-center">
                <a href="https://gjc-auth.vercel.app/books" className="cursor-pointer">
                    <div className="mb-3 rounded-md px-4 py-2 w-full lg:w-80 bg-blue-500 hover:bg-green-700 focus:outline-none focus:bg-green-700 text-white text-center">
                    <p className="font-bold text-2xl">GJC students can view books now</p>
                    <p>Thanks for proceeding in this button</p>
                    </div>
                </a>
                <a href="https://gjc-auth.vercel.app/auth/login" className="cursor-pointer">
                    <div className="rounded-md px-4 py-2 w-full lg:w-80 bg-green-500 hover:bg-green-700 focus:outline-none focus:bg-green-700 text-white text-center">
                    <p className="font-bold text-2xl">GJC students can login now</p>
                    <p>No hard process required. Connect anytime.</p>
                    </div>
                </a>
            </div>
            <div className="flex justify-center space-x-3">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white">
                    <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <title>Twitter</title>
                        <path d="m459 152 1 13c0 139-106 299-299 299-59 0-115-17-161-47a217 217 0 0 0 156-44c-47-1-85-31-98-72l19 1c10 0 19-1 28-3-48-10-84-52-84-103v-2c14 8 30 13 47 14A105 105 0 0 1 36 67c51 64 129 106 216 110-2-8-2-16-2-24a105 105 0 0 1 181-72c24-4 47-13 67-25-8 24-25 45-46 58 21-3 41-8 60-17-14 21-32 40-53 55z">
                        </path>
                    </svg>
                </button>
                 <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white">
                    <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <title>Facebook</title>
                        <path d="M379 22v75h-44c-36 0-42 17-42 41v54h84l-12 85h-72v217h-88V277h-72v-85h72v-62c0-72 45-112 109-112 31 0 58 3 65 4z">
                        </path>
                    </svg>
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                    <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6">
                        <title>Linkedin</title>
                        <path d="M136 183v283H42V183h94zm6-88c1 27-20 49-53 49-32 0-52-22-52-49 0-28 21-49 53-49s52 21 52 49zm333 208v163h-94V314c0-38-13-64-47-64-26 0-42 18-49 35-2 6-3 14-3 23v158h-94V183h94v41c12-20 34-48 85-48 62 0 108 41 108 127z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    );
};

export default Contacts;
