import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LoginActivity = (props) => {

    const [ariaExpanded, setAriaExpanded] = useState('');

    useEffect(() => {
        console.log(props)
        let auth = props?.auth;
    }, []);

    return (
        <>
            <div className="p-2">
                <div className="bg-white p-4 py-8 mt-12">
                    <h4 className="text-3xl font-bold text-black-800 text-center">Login activity</h4>
                    <p className="text-center text-gray-600 text-sm mt-2">Here are some of the login activity of yourss</p>
                </div>

                <div className='mb-16 bg-white rounded-lg shadow-xl'>
                    {/* <!-- component -->
                    <!-- This is an example component --> */}
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
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(LoginActivity);