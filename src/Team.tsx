const Team = () => {
    return (
        <>
        <div className="p-4 sm:ml-64">
            <div className="text-white text-center">
                <h1 className="text-center mb-4 mt-4">Meet Our Team</h1>
                    <div className="p-4 grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-4 xs:gap-3 gap-4 ">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden p-[3px]">
                            <div className="aspect-w-16 aspect-h-9">
                                <img src="https://i.imgur.com/s3MQXGV.jpg" alt="Melvin Nogoy" className="transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full" />
                            </div>
                            <div className="p-4 text-center text-white bg-teal-500">
                                <p className="text-lg font-bold">Melvin Nogoy</p>
                                <p className="text-sm ">Software Architect</p>
                            </div>
                        </div>
            
                        <div className="bg-white shadow-md rounded-lg overflow-hidden p-[3px]">
                            <div className="aspect-w-16 aspect-h-9">
                                <img src="https://i.imgur.com/YusSTZt.jpg" alt="John Miguel Macabagdal" className="transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full" />
                            </div>
                            <div className="p-4 text-center text-white bg-teal-500">
                                <p className="text-lg font-bold">Miguel Macabagdal</p>
                                <p className="text-sm">Database Admin</p>
                            </div>
                        </div>
            
                        <div className="bg-white shadow-md rounded-lg overflow-hidden p-[3px]">
                            <div className="aspect-w-16 aspect-h-9">
                                <img src="https://i.imgur.com/YtxdFt4.jpg" alt="Jethro Mabeza" className="transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full" />
                            </div>
                            <div className="p-4 text-center text-white bg-teal-500">
                                <p className="text-lg font-bold">Jethro Mabeza</p>
                                <p className="text-sm">Software Designer</p>
                            </div>
                        </div>
            
                        <div className="bg-white shadow-md rounded-lg overflow-hidden p-[3px]">
                            <div className="aspect-w-16 aspect-h-9">
                                <img src="https://i.imgur.com/yB3fdBK.jpg" alt="Janzen De Asis" className="transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full" />
                            </div>
                            <div className="p-4 text-center text-white bg-teal-500">
                                <p className="text-lg font-bold">Janzen De Asis</p>
                                <p className="text-sm">Software Engineer</p>
                            </div>
                        </div>
        
                        <div className="bg-white shadow-md rounded-lg overflow-hidden p-[3px]">
                            <div className="aspect-w-16 aspect-h-9">
                                <img src="https://i.imgur.com/L4tIPCd.jpg" alt="Jonn Esternon" className="transition duration-300 ease-in-out hover:scale-110 object-cover w-full h-full" />
                            </div>
                            <div className="p-4 text-center text-white bg-teal-500">
                                <p className="text-lg font-bold">Jonn Esternon</p>
                                <p className="text-sm">Algo/Intern/Designer/UI-UX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;