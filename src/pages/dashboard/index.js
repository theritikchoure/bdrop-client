import React from 'react';
import Header from '../../components/header';
import '../../assets/styles/dashboard.css';
const patientCardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const index = () => {
    console.log(patientCardArr.length);
    return (
        <>
            <Header />
            <div className='lg:px-64 pt-6'>
                <div className="h-screen pt-6">
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        {/* <!-- Sub total --> */}
                        <div className="mt-6 mb-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <div>
                                <p className="text-sm text-gray-700 text-center">Complete profile information first</p>
                            </div>
                            <button className="primary-btn mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Update profile</button>
                        </div>
                        <div className="rounded-lg md:w-2/3">
                            {/* Patient Request Card */}
                            {patientCardArr.map((element, index) => {
                                return  (
                                <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                        <div className="mt-0.5 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="mt-5 sm:mt-0">
                                                <h2 className="text-base font-normal text-gray-900">Name</h2>
                                                <p className="mt-1 text-base font-medium text-gray-700">John Doe</p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="primary-text-color text-base font-normal">23-01-2022</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-0">
                                            <h2 className="text-base font-normal text-gray-900">Location</h2>
                                            <p className="mt-1 text-base font-medium text-gray-700">Jawaharlal Nehru Cancer Hospital and Research Centre</p>
                                        </div>
                                        <div className="mt-0.5 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="mt-5 sm:mt-0">
                                                <h2 className="text-base font-normal text-gray-900">Blood group</h2>
                                                <p className="mt-1 text-base font-medium text-gray-700">AB+</p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="primary-text-color text-lg font-bold cursor-pointer">Donate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                               
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index