import React from 'react'

const Shimmer = () => {
    return (
        <div className='p-4 m-4 bg-black bg-opacity-90 text-white rounded-lg w-full sm:w-120 md:w-[65vw] lg:w-[54%] absolute top-48 left-0 right-0 mx-auto z-50 bg-fixed max-h-[700px] md:h-[800px]'>

            
            {[1, 2].map((item) => (
                <div key={item} className="mb-8 p-4">

                    
                    <div className="h-8 w-48 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>

                    
                    <div className="flex gap-4 overflow-hidden">
                        {[1, 2, 3, 4, 5, 6].map((card) => (
                            <div
                                key={card}
                                className="w-48 h-60 bg-gray-800 rounded-lg shrink-0 animate-pulse"
                            ></div>
                        ))}
                    </div>
                </div>
            ))}
            <div  className="mb-8 p-4 hidden md:block lg:hidden bg-black -mt-5 w-[65vw] -ml-4">

                    
                    <div className="h-8 w-48 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>

                    
                    <div className="flex gap-4 overflow-hidden">
                        {[1, 2, 3, 4, 5, 6].map((card) => (
                            <div
                                key={card}
                                className="w-48 h-60 bg-gray-800 rounded-lg shrink-0 animate-pulse"
                            ></div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Shimmer