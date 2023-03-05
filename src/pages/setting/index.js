import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Setting = (props) => {

    const [ariaExpanded, setAriaExpanded] = useState('');

    useEffect(() => {
        console.log(props)
        let auth = props?.auth;
    }, []);

    return (
        <>
            <div className="p-2">
                <div className="flex flex-col justify-center items-center mt-16">
                    <div className="relative flex flex-col items-center rounded-[20px] w-[100%] p-4 bg-white bg-clip-border shadow-xl">
                        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                            <div className="absolute flex h-32 w-full justify-center rounded-xl" style={{background: '#ff2156'}} 
                            />
                            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                                <img className="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
                            </div>
                        </div>
                        <div className="mt-16 flex flex-col items-center">
                            <h4 className="text-xl font-bold text-navy-700 dark:text-black">
                                Adela Parkson
                            </h4>
                            <p className="text-base font-normal text-gray-600">Yay! you have completed 56 days waiting time</p>
                        </div>
                        <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                            <div className="flex flex-col items-center justify-center">
                                <svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1 dark:text-black">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <path d="M14.7118754,20.0876892 L8.03575361,20.0876892 C5.82661462,20.0876892 4.03575361,18.2968282 4.03575361,16.0876892 L4.03575361,12.031922 C4.03575361,8.1480343 6.79157254,4.90780265 10.4544842,4.15995321 C8.87553278,8.5612583 8.1226025,14.3600511 10.9452499,15.5413938 C13.710306,16.6986332 14.5947501,18.3118357 14.7118754,20.0876892 Z M14.2420017,23.8186831 C13.515543,27.1052019 12.7414284,30.2811559 18.0438552,31.7330419 L18.0438552,33.4450645 C18.0438552,35.6542035 16.2529942,37.4450645 14.0438552,37.4450645 L9.90612103,37.4450645 C6.14196811,37.4450645 3.09051926,34.3936157 3.09051926,30.6294627 L3.09051926,27.813861 C3.09051926,25.604722 4.88138026,23.813861 7.09051926,23.813861 L14.0438552,23.813861 C14.1102948,23.813861 14.1763561,23.8154808 14.2420017,23.8186831 Z M20.7553776,32.160536 C23.9336213,32.1190063 23.9061943,29.4103976 33.8698747,31.1666916 C34.7935223,31.3295026 35.9925894,31.0627305 37.3154077,30.4407183 C37.09778,34.8980343 33.4149547,38.4450645 28.9036761,38.4450645 C24.9909035,38.4450645 21.701346,35.7767637 20.7553776,32.160536 Z" fill="currentColor" opacity="0.1"></path>
                                        <g transform="translate(2.000000, 3.000000)">
                                            <path d="M8.5,1 C4.35786438,1 1,4.35786438 1,8.5 L1,13 C1,14.6568542 2.34314575,16 4,16 L13,16 C14.6568542,16 16,14.6568542 16,13 L16,4 C16,2.34314575 14.6568542,1 13,1 L8.5,1 Z" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M4,20 C2.34314575,20 1,21.3431458 1,23 L1,27.5 C1,31.6421356 4.35786438,35 8.5,35 L13,35 C14.6568542,35 16,33.6568542 16,32 L16,23 C16,21.3431458 14.6568542,20 13,20 L4,20 Z" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M23,1 C21.3431458,1 20,2.34314575 20,4 L20,13 C20,14.6568542 21.3431458,16 23,16 L32,16 C33.6568542,16 35,14.6568542 35,13 L35,8.5 C35,4.35786438 31.6421356,1 27.5,1 L23,1 Z" stroke="currentColor" strokeWidth="2"></path>
                                            <path d="M34.5825451,33.4769886 L38.3146092,33.4322291 C38.8602707,33.4256848 39.3079219,33.8627257 39.3144662,34.4083873 C39.3145136,34.4123369 39.3145372,34.4162868 39.3145372,34.4202367 L39.3145372,34.432158 C39.3145372,34.9797651 38.8740974,35.425519 38.3265296,35.4320861 L34.5944655,35.4768456 C34.048804,35.4833899 33.6011528,35.046349 33.5946085,34.5006874 C33.5945611,34.4967378 33.5945375,34.4927879 33.5945375,34.488838 L33.5945375,34.4769167 C33.5945375,33.9293096 34.0349773,33.4835557 34.5825451,33.4769886 Z" fill="currentColor" transform="translate(36.454537, 34.454537) rotate(-315.000000) translate(-36.454537, -34.454537) "></path>
                                            <circle stroke="currentColor" strokeWidth="2" cx="27.5" cy="27.5" r="7.5"></circle>
                                        </g>
                                    </g>
                                </svg>
                                <p className="text-2xl font-bold text-navy-700 dark:text-black">17</p>
                                <p className="text-sm font-normal text-gray-600">Posts</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg width="40" height="40" viewBox="-2.4 -2.4 28.80 28.80" fill="none" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#e60000">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.24000000000000005"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M20.9982 9C21.0328 7.7106 20.558 6.41009 19.574 5.42602C17.6726 3.52466 14.5899 3.52466 12.6885 5.42602L12 6.11456L11.3115 5.42602C9.4101 3.52466 6.32738 3.52466 4.42602 5.42602C2.52466 7.32738 2.52466 10.4101 4.42602 12.3115L12 19.8854L13.8935 17.9919" stroke="#ff0000" strokeWidth="0.9359999999999999" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M9 12.6667H11.6667L13.6667 10L15.6667 15.3333L17.6667 12.6667H21" stroke="#ff0000" strokeWidth="0.9359999999999999" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                <p className="text-2xl font-bold text-navy-700 dark:text-black">
                                    9.7K
                                </p>
                                <p className="text-sm font-normal text-gray-600">Followers</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <svg width="40" height="40" viewBox="-6.4 -6.4 44.80 44.80" fill="#ff0000" stroke="#ff0000" strokeWidth="0.64"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M24.839 15.852c-0.021-0.083-0.063-0.158-0.118-0.22l-8.722-14.546-1.246 2.077h0.002l-7.525 12.548c-0.019 0.031-0.034 0.063-0.045 0.097-0.86 1.52-1.315 3.238-1.315 4.976 0 5.585 4.544 10.129 10.13 10.129s10.129-4.544 10.129-10.129c0-1.721-0.446-3.422-1.29-4.932zM16.001 29.847c-4.997 0-9.064-4.066-9.064-9.063 0-1.584 0.423-3.151 1.222-4.531 0.015-0.026 0.027-0.052 0.037-0.079l7.803-13.013 7.802 13.011c0.010 0.028 0.023 0.055 0.039 0.081 0.8 1.38 1.222 2.947 1.222 4.531 0 4.998-4.066 9.063-9.063 9.063z" fill="#ff0000"> </path> </g></svg>
                                <p className="text-2xl font-bold text-navy-700 dark:text-black">
                                    434
                                </p>
                                <p className="text-sm font-normal text-gray-600">Following</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex py-5 mb-16 shadow-xl">
                    <div className="w-full bg-white">
                        <Link
                            to="/profile"
                            aria-current="true"
                            className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                            Personal info
                        </Link>
                        <button className="text-left w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100"
                            onClick={() => setAriaExpanded(prev => prev === 'invite' ? '' : 'invite')}>
                            Invite friends
                        </button>
                        {ariaExpanded === 'invite' && <div className="pb-4 px-5">
                            <Link
                                to="/profile"
                                aria-current="true"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Invite friends by email
                            </Link>
                            <Link
                                to="/terms-and-conditions"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Invite friends by sms
                            </Link>
                            <Link
                                to="/terms-and-conditions"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Invite friends by whatsapp
                            </Link>
                            <Link
                                to="/terms-and-conditions"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Invite friends by...
                            </Link>
                        </div>}
                        <button className="text-left w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100"
                            onClick={() => setAriaExpanded(prev => prev === 'about' ? '' : 'about')}>
                            About
                        </button>
                        {ariaExpanded === 'about' && <div className="pb-4 px-5">
                            <Link
                                to="/profile"
                                aria-current="true"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Privacy policies
                            </Link>
                            <Link
                                to="/terms-and-conditions"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Terms and conditions
                            </Link>
                            <Link
                                to="/terms-and-conditions"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Contact us
                            </Link>
                        </div>}
                        <button className="text-left w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100"
                            onClick={() => setAriaExpanded(prev => prev === 'others' ? '' : 'others')}>
                            Others
                        </button>
                        {ariaExpanded === 'others' && <div className="pb-4 px-5">
                            <Link
                                to="/login-activity"
                                aria-current="true"
                                className="block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                                Login acitivity
                            </Link>
                        </div>}
                        <button
                            className="primary-text-color text-left w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-primary-600 hover:bg-neutral-100">
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Setting);