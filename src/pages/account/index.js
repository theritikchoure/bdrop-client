import React, { useEffect, useState } from 'react'
import { isEmpty } from '../../helper/common';
import { accountValidate } from '../../validations/account.validations';
import { connect } from 'react-redux';
const bloodgroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

const Account = (props) => {
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
        let auth = props?.auth;
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
        let error = accountValidate(payload)
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
            <div className="p-2">
                <div className="bg-white p-4 py-8 mt-12">
                    <h4 className="text-3xl font-bold text-black-800 text-center">Update profile</h4>
                    <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                </div>

                <div className='mb-16 bg-white rounded-lg shadow-xl'>
                    {/* <!-- component -->
                    <!-- This is an example component --> */}
                    <div className="mb-10 max-w-2xl mx-auto bg-white p-6">

                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Name</label>
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
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Mobile number</label>
                                    <input className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        type="text" id="phone" value={initialValue.mobile === null ? '' : initialValue?.mobile}
                                        onChange={(e) => onChangeFormData('mobile', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.mobile && <span className='validation_message'>{error?.mobile}</span>}
                                </div>
                                <div className='mb-6'>
                                    <div className="mb-1">
                                        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Gender</label>
                                    </div>
                                    <div className="flex items-start mb-2">
                                        <div className="flex items-center h-5">
                                            <input id="gender" name='gender' type="radio" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <label htmlFor="gender" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Female</label>
                                        &nbsp; &nbsp;
                                        <div className="flex items-center h-5">
                                            <input id="gender" name='gender' type="radio" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <label htmlFor="gender" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Male</label>
                                    </div>
                                    {error?.gender && <span className='validation_message'>{error?.gender}</span>}
                                </div>
                                <div>
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Address</label>
                                    <input type="text" id="address" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.address === null ? '' : initialValue?.address} onChange={(e) => onChangeFormData('address', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.address && <span className='validation_message'>{error?.address}</span>}
                                </div>
                                <div>
                                    <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">State</label>
                                    <input type="text" id="state" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.state === null ? '' : initialValue?.state} onChange={(e) => onChangeFormData('state', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.state && <span className='validation_message'>{error?.state}</span>}
                                </div>

                                <div>
                                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">City</label>
                                    <input type="text" id="city" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.city === null ? '' : initialValue?.city} onChange={(e) => onChangeFormData('city', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.city && <span className='validation_message'>{error?.city}</span>}
                                </div>
                                <div>
                                    <label htmlFor="zip_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Zip code</label>
                                    <input type="text" id="zip_code" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.zip_code === null ? '' : initialValue?.zip_code} onChange={(e) => onChangeFormData('zip_code', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.zip_code && <span className='validation_message'>{error?.zip_code}</span>}
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="birth_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Birthdate</label>
                                    <input type="date" id="birth_date" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.birth_date === null ? '' : initialValue?.birth_date} onChange={(e) => onChangeFormData('birth_date', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.birth_date && <span className='validation_message'>{error?.birth_date}</span>}
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Occcupation</label>
                                    <input type="text" id="confirm_password" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.occupation === null ? '' : initialValue?.occupation} onChange={(e) => onChangeFormData('occupation', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.occupation && <span className='validation_message'>{error?.occupation}</span>}
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Weight</label>
                                    <input type="text" id="confirm_password" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.weight === null ? '' : initialValue?.weight} onChange={(e) => onChangeFormData('weight', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.weight && <span className='validation_message'>{error?.weight}</span>}
                                </div>
                                <div className='mb-6'>
                                    <div className="mb-1">
                                        <label htmlFor="have_you_donated" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">Have you donated blood previously?</label>
                                    </div>
                                    <div className="flex items-start mb-2">
                                        <div className="flex items-center h-5">
                                            <input id="have_you_donated" name='have_you_donated' type="radio" value="yes"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 
                                                dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                onChange={(e) => onChangeFormData('have_you_donated', e.target.value === '' ? null : e.target.value)}
                                            />
                                        </div>
                                        <label htmlFor="have_you_donated" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Yes</label>
                                        &nbsp; &nbsp;
                                        <div className="flex items-center h-5">
                                            <input id="have_you_donated" name='have_you_donated' type="radio" value="no"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 
                                                dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                                onChange={(e) => onChangeFormData('have_you_donated', e.target.value === '' ? null : e.target.value)}
                                            />
                                        </div>
                                        <label htmlFor="have_you_donated" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">No</label>
                                    </div>
                                    {error?.have_you_donated && <span className='validation_message'>{error?.have_you_donated}</span>}
                                </div>

                                {initialValue.have_you_donated === 'yes' && <div className="mb-6">
                                    <label htmlFor="donated_at" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black-300">What was the last time when you donated blood?</label>
                                    <input type="month" id="donated_at" className="bg-gray-50 text-gray-900 text-sm block w-full p-2.5 dark:placeholder-gray-400 dark:text-black border"
                                        value={initialValue.donated_at === null ? '' : initialValue?.donated_at}
                                        onChange={(e) => onChangeFormData('donated_at', e.target.value === '' ? null : e.target.value)}
                                    />
                                    {error?.donated_at && <span className='validation_message'>{error?.donated_at}</span>}
                                </div>}
                            </div>

                            <button type="submit" className="primary-btn hover-primary-btn text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Account);