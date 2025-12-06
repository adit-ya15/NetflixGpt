import React from 'react'

const Shimmer = () => {
    return (
        <div className='p-4 m-4 bg-black bg-opacity-90 text-white rounded-lg w-full md:w-[60vw] absolute top-48 left-0 right-0 mx-auto z-50 min-h-[600px]'>

            {/* Create 3 fake rows of data */}
            {[1, 2, 3].map((item) => (
                <div key={item} className="mb-8 p-4">

                    
                    <div className="h-8 w-48 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>

                    
                    <div className="flex gap-4 overflow-hidden">
                        {[1, 2, 3, 4, 5, 6].map((card) => (
                            <div
                                key={card}
                                className="w-48 h-72 bg-gray-800 rounded-lg shrink-0 animate-pulse"
                            ></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Shimmer