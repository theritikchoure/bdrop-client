import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BloodGroups, isEmpty } from '../../helper/common';
const bloodgroups = BloodGroups;

const PatientHome = (props) => {

    const [ariaExpanded, setAriaExpanded] = useState('');
    const [profileCompletionCard, setProfileCompletionCard] = useState(true);
    let auth = props?.auth;

    const [initialValue, setInitialValue] = useState({
        name: null,
        email: null,
        mobile: null,
        gender: null,
        address: null,
        state: null,
        city: null,
        zip_code: null,
        birth_date: null,
        occupation: null,
        weight: null,
        have_you_donated: null,
        donated_at: null,
    });
    const [error, setError] = useState({});

    useEffect(() => {
        console.log(props)
        loadData();
    }, []);

    const loadData = async () => {
        await getUserDetails()
    };

    const getUserDetails = async () => {

    }

    const onChangeFormData = (key, value) => {
        if (!key) return;

        console.log(key, value)

        setInitialValue((prev) => {
            return {
                ...prev,
                [key]: value,
            };
        });
    };

    const checkValidation = (payload) => {
        let error = null;
        if (!isEmpty(error)) {
            console.log(error);
            setError(error);
            return true;
        }

        setError({});
        return false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        checkValidation(initialValue);
    }

    return (
        <>
        {!auth?.user?.user?.is_profile_completed && <div className="mt-6 mb-6 h-full rounded-lg border bg-white p-6 shadow-md mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    onClick={() => setProfileCompletionCard(false)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                    <p className="text-sm text-gray-700 text-center">Complete profile information first</p>
                </div>
                <Link to={'/profile'}>
                    <button className="primary-btn hover-primary-btn mt-6 w-full rounded-md bg-blue-500 py-1.5 font-small"
                    >Update profile</button>
                </Link>
            </div>}
            <div className="p-2">
                <div className="flex flex-col justify-center items-center mt-16">
                    <div className="relative flex flex-col items-center rounded-[20px] w-[100%] p-4 bg-white bg-clip-border shadow-xl">
                        <div className="relative flex  w-full justify-center rounded-xl bg-cover" >
                            <div className="w-11/12">
                                <div className="bg-white p-4 py-8">
                                    <h4 className="text-xl font-bold text-black-600">Find a donor</h4>
                                </div>

                                <div className='mb-2'>
                                    {/* <!-- component -->
                    <!-- This is an example component --> */}
                                    <div className=" max-w-2xl mx-auto bg-white p-6">

                                        <form onSubmit={handleSubmit}>
                                            <div className="grid gap-6 mb-6">
                                                <div>
                                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Enter the location</label>
                                                    <input className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                                        type="text" id="name" value={initialValue.name === null ? '' : initialValue?.name}
                                                        onChange={(e) => onChangeFormData('name', e.target.value === '' ? null : e.target.value)}
                                                    />
                                                    {error?.name && <span className='validation_message'>{error?.name}</span>}
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Blood group</label>
                                                    <select name="is_active" id="phone" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                                        onChange={(e) => {
                                                            onChangeFormData("bloog_group", e.target.value);
                                                        }}
                                                        value={initialValue.is_active}
                                                    >
                                                        <option value={''}>None</option>
                                                        {bloodgroups.length > 0 && bloodgroups.map((bg, index) => {
                                                            return <option key={index} value={bg}>{bg}</option>
                                                        })}
                                                    </select>
                                                    {error?.blood_group && <span className='validation_message'>{error?.blood_group}</span>}
                                                </div>
                                            </div>

                                            <button type="submit" className="primary-btn hover-primary-btn text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
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

export default connect(mapStateToProps)(PatientHome);