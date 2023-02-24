import React from 'react'
import Header from '../../components/header';

const Account = () => {
    return (
        <>
            <Header />
            <div className="p-2">
                <div className="bg-white p-4 py-8 mt-12">
                    <h4 className="text-3xl font-bold text-black-800 text-center">Update profile</h4>
                    <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                </div>

                <div className='bg-white rounded-lg shadow-xl'>
                    {/* <!-- component -->
                    <!-- This is an example component --> */}
                    <div className="max-w-2xl mx-auto bg-white p-6">

                        <form>
                            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Name</label>
                                    <input type="text" id="first_name" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="John" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Email address</label>
                                    <input type="email" id="email" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="john.doe@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Phone number</label>
                                    <input type="tel" id="phone" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Gender</label>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="gender" name='gender' type="radio" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="gender" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Female</label>
                                    &nbsp; &nbsp;
                                    <div className="flex items-center h-5">
                                        <input id="gender" name='gender' type="radio" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="gender" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Male</label>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Last name</label>
                                    <input type="text" id="last_name" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Company</label>
                                    <input type="text" id="company" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="Flowbite" required />
                                </div>

                                <div>
                                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Website URL</label>
                                    <input type="url" id="website" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="flowbite.com" required />
                                </div>
                                <div>
                                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Unique visitors (per month)</label>
                                    <input type="number" id="visitors" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Password</label>
                                <input type="password" id="password" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="•••••••••" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Confirm password</label>
                                <input type="password" id="confirm_password" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-white" placeholder="•••••••••" required />
                            </div>

                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                        <p className="mt-5">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
                            more by going to the official <a className="text-blue-600 hover:underline"
                                href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite
                                Documentation</a>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account