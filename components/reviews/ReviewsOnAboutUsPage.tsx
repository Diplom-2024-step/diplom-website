import React from 'react'
import GridBigReviewCards from './GridBigReviewCards'

const ReviewsOnAboutUsPage = () => {





    return (
        <div id="reviews" className="flex flex-col items-center mb-[50px]">
            <div className="flex flex-col items-center   h-full mt-10 mb-10 w-4/5">
                <p className="text-[43px] font-bold mb-[35px] text-customBlack font-unbounded">
                    Рейтинг та відгуки
                </p>
            </div>
            <div className="w-4/6 bg-gray-100">
                <div className="grid grid-cols-5 gap-4 p-4 rounded-lg">
                    <div className="col-span-1 flex flex-col items-center">
                        <p className="text-[75px] font-bold text-black">4.8</p>
                        <div className="flex mt-2">
                            <span className="text-yellow-500 text-[35px]">★★★★★</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            на основі 1550 відгуків
                        </p>
                    </div>

                    <div className="col-span-3 grid grid-cols-2 gap-4 mt-[20px]">
                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-black">Обслуговування</p>
                                <p className="text-black">86%</p>
                            </div>
                            <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                                <div className="h-full w-[86%] bg-yellow-500 rounded-full"></div>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <p className="text-black">Організація поїздок</p>
                                <p className="text-black">91%</p>
                            </div>
                            <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                                <div className="h-full w-[91%] bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <p className="text-black">Житло</p>
                                <p className="text-black">80%</p>
                            </div>
                            <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                                <div className="h-full w-[80%] bg-yellow-500 rounded-full"></div>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <p className="text-black">Ціна/Якість</p>
                                <p className="text-black">86%</p>
                            </div>
                            <div className="h-4 w-full bg-customAqua rounded-full mt-1">
                                <div className="h-full w-[86%] bg-yellow-500 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col items-center mt-[20px] space-y-2">
                        <div className="text-yellow-500 text-2xl">😊</div>
                        <div className="text-blue-400 text-2xl">😐</div>
                        <div className="text-blue-400 text-2xl">☹️</div>
                    </div>
                </div>
                
<GridBigReviewCards/>
            </div>

        </div>
    )
}

export default ReviewsOnAboutUsPage