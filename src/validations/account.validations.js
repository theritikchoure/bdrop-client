import { isEmail, isEmpty } from "../helper/common";

export const accountValidate = (payload) => {
    console.log(payload);
    let errors = {};

    if (isEmpty(payload.name)) {
        errors.name = 'Name is required';
    } else if (String(payload.name).length < 3) {
        errors.name = 'Name must be at least 3 characters';
    }
    
    if (isEmpty(payload.email)) {
        errors.email = 'Email is required';
    } else if (!isEmail(payload.email)) {
        errors.email = 'Email must be valid address';
    }

    if (isEmpty(payload.mobile) || String(payload.mobile).length !== 10) {
        errors.mobile = 'Mobile number must be 10 characters';
    }

    if (isEmpty(payload.gender)) {
        errors.gender = 'Gender is required number must be 10 characters';
    }

    return errors;
}