import '../../assets/styles/join.css';
import MobileSecurityIcon from '../../assets/images/mobile-security-icon.png';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { loginValidate } from '../../validations/login.validation';
import { connect } from 'react-redux';
import { generateOTP, verifyOTP } from '../../services/auth.service';
import { isEmpty } from '../../helper/common';
import { successToast, warningToast } from '../../components/toasterNotifications';
import { Link, useNavigate } from 'react-router-dom';

const Index = (props) => {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Request OTP');
  const [formType, setFormType] = useState('generateotp');
  const [initialValue, setInitialValue] = useState({
    user_type: '',
    mobile: '',
    otp: '',
    remember: true,
  });
  const [error, setError] = useState({})

  const onChangeFormData = (key, value) => {
    if (!key) return;

    setInitialValue((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === 'generateotp') {
      generateOtp(e);
      return;
    } else if (formType === 'verifyotp') {
      verifyOtp(e);
      return;
    }

    return;
  }

  const generateOtp = async (e) => {
    try {
      let error = loginValidate({ user_type: initialValue.user_type, mobile: initialValue.mobile })
      if (!isEmpty(error)) {
        console.log(error);
        setError(error);
        return;
      }

      setError({});

      let res = await props.generateOTP({ user_type: initialValue.user_type, mobile: initialValue.mobile });
      setInitialValue({
        user_type: initialValue.user_type,
        mobile: initialValue.mobile,
        otp: '',
        remember: initialValue.remember
      });
      setFormType('verifyotp');
      setButtonText('Submit OTP');
      successToast(res.message);
      return true;
    } catch (error) {
      console.log(error);
      warningToast(error.message || error);
    }
  };

  const verifyOtp = async (e) => {
    try {
      console.log('verify otp')
      let error = loginValidate({ 
        user_type: initialValue.user_type, 
        mobile: initialValue.mobile, 
        otp: initialValue.otp,
        remember: initialValue.remember
      }, formType);
      console.log(error);
      if (!isEmpty(error)) {
        setError(error);
        return;
      }

      setError({});

      let res = await props.verifyOTP({ user_type: initialValue.user_type, mobile: initialValue.mobile, otp: initialValue.otp });
      setInitialValue({
        user_type: 'patient',
        mobile: '',
        otp: '',
      });
      setFormType('generateotp');
      setButtonText('Request OTP')
      successToast(res.message);
      navigate('/explore');
      return true;
    } catch (error) {
      console.log(error);
      warningToast(error.message || error);
    }
  };


  return (
    // < !--component -- >
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-center text-gray-700 text-black">Join - BDROP</h2>

              <p className="mt-3 text-black-300">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <div className="user-type-tab-div">
                <div className="user-type-tab">
                <button className={initialValue.user_type === 'patient' ? 'tablinks active' : 'tablinks'}
                  onClick={() => onChangeFormData('user_type', 'patient')}
                >Patient</button>
                <button className={initialValue.user_type === 'donor' ? 'tablinks active' : 'tablinks'}
                  onClick={() => onChangeFormData('user_type', 'donor')}>Donor</button>
                </div>
                {error?.user_type && <span className='validation_message'>{error?.user_type}</span>}
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="mobile" className="block mb-2 text-sm text-black-600 dark:text-black-200">Enter mobile</label>
                  <input type="text" name="mobile" id="mobile" placeholder="8742517859"
                    value={initialValue.mobile}
                    onChange={(e) => onChangeFormData('mobile', e.target.value)}
                    disabled={formType === 'verifyotp'}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-black-600 dark:text-black-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  {error?.mobile && <span className='validation_message'>{error?.mobile}</span>}
                </div>

                <div className="mt-6">
                  <label htmlFor="password" className="text-sm text-black-600 dark:text-black-200">Enter OTP</label>
                  <OtpInput id="login_otp"
                    value={initialValue.otp}
                    onChange={(otp) => { onChangeFormData('otp', otp) }}
                    numInputs={6}
                    separator={<span>-</span>}
                    containerStyle={'login_otp_container'}
                    inputStyle={'login_otp_input'}
                    isDisabled={formType === 'generateotp'}
                  />
                  {error?.otp && <span className='validation_message'>{error?.otp}</span>}
                </div>

                <div className="flex items-start mt-6">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value={initialValue?.remember}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
                      focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 
                      dark:ring-offset-gray-800" checked={initialValue?.remember}
                      onChange={(e) => onChangeFormData('remember', e.target.checked)}
                    />
                  </div>
                  <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    I agree with the &nbsp;
                    <Link to="/terms-and-conditions" target={'_blank'} className="text-red-700 hover:underline dark:text-red-700">
                      terms and conditions
                    </Link>.
                  </label>
                </div>
                {error?.remember && <span className='validation_message'>{error?.remember}</span>}

                <div className="mt-6">
                  <button id='login_submit_button' type='submit'
                    className="w-full px-4 py-2 tracking-wide transition-colors duration-200 transform rounded-md focus:outline-none focus:ring focus:ring-opacity-50">
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundColor: 'var(--main-bg-color)' }}>
          <div className="flex items-center h-full px-20 flex-1 flex-col justify-center">
            <div className="bg-white h-28 w-28 rounded-full px-4 py-2 mt-12 flex items-center justify-center space-x-2 lg:space-x-4">
              <img src={MobileSecurityIcon} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { generateOTP, verifyOTP })(Index);