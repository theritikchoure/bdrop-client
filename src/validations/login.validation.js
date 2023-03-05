import { isEmpty } from "../helper/common";

export const loginValidate = (payload, formType = null) => {
    console.log(payload);
    let errors = {};

    if(isEmpty(payload.user_type)) {
        errors.user_type = 'Please select user type first';
    }
    
    if(isEmpty(payload.mobile) || String(payload.mobile).length !== 10) {
        errors.mobile = 'Mobile number must be of 10 digits';
    }

    if(formType === 'verifyotp') {
        if(isEmpty(payload.otp)) {
            errors.otp = 'OTP is required';
        } else if(String(payload.otp).length !== 6) {
            errors.otp = 'OTP must be 6 digits';
        }

        if(!payload.remember) {
            errors.remember = 'Accept terms and conditions';
        }
    }  

    return errors;
}