import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import '../../assets/styles/dashboard.css';
import { Link } from 'react-router-dom';

const patientCardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Index = () => {
    const [profileCompletionCard, setProfileCompletionCard] = useState(true);
    const [locationAccess, setLocationAccess] = useState(false);
    const [locationBlocked, setLocationBlocked] = useState(false);
    useEffect(() => {
        getLocation();
    }, [])


    const getLocation = () => {
        if (navigator.geolocation) {
            console.log('supported')
            navigator.geolocation.getCurrentPosition((position) => {
                if (position.coords.latitude) setLocationAccess(true);
            });
            setLocationAccess(false);
            setLocationBlocked(true);
        } else {
            alert("not supported")
        }
    }

    console.log(locationAccess)

    return (
        <>
            {/* <!-- Profile completion card --> */}
            {profileCompletionCard && <div className="mt-6 mb-6 h-full rounded-lg border bg-white p-6 shadow-md mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    onClick={() => setProfileCompletionCard(false)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                    <p className="text-sm text-gray-700 text-center">Complete profile information first</p>
                </div>
                <Link to={'/account'}>
                    <button className="primary-btn hover-primary-btn mt-6 w-full rounded-md bg-blue-500 py-1.5 font-small"
                    >Update profile</button>
                </Link>
            </div>}

            {!locationAccess && <div className="mt-6 mb-6 h-full rounded-lg border bg-white p-6 shadow-md mt-20">
                <div>
                    <p className="text-sm text-gray-700 text-center">
                        {locationBlocked ?
                            'Please enable location permission and try again' :
                            'Enable location permission for better experience'
                        }
                    </p>
                </div>
                {!locationBlocked && <button className="primary-btn hover-primary-btn mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium"
                    onClick={getLocation}
                >Give location access</button>}
            </div>}
            <div className="mt-6 rounded-lg">
                {/* Patient Request Card */}
                {patientCardArr.map((element, index) => {
                    return (
                        <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md flex justify-start">
                            <div className="md:ml-4 md:flex md:w-full md:justify-between">
                                <div className="mt-0.5 flex justify-between md:space-y-6 md:mt-0 md:block md:space-x-6">
                                    <div className="mt-5 md:mt-0">
                                        <h2 className="text-base font-normal text-gray-900">Name</h2>
                                        <p className="mt-1 text-base font-medium text-gray-700">John Doe</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="primary-text-color text-base font-normal">23-01-2022</p>
                                    </div>
                                </div>
                                <div className="mt-5 md:mt-0">
                                    <h2 className="text-base font-normal text-gray-900">Location</h2>
                                    <p className="mt-1 text-base font-medium text-gray-700">Jawaharlal Nehru Cancer Hospital and Research Centre</p>
                                </div>
                                <div className="mt-0.5 flex justify-between md:space-y-6 md:mt-0 md:block md:space-x-6">
                                    <div className="mt-5 md:mt-0">
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
        </>
    )
}

export default Index;