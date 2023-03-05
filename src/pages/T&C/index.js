import React from 'react'
import Header from '../../components/header';

const TAndC = () => {
    return (
        <div className="p-2">
            <div className="bg-white p-4 py-8 mt-12">
                <h4 className="text-3xl font-bold text-black-800 text-center">Terms &amp; Conditions</h4>
                <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
            </div>

            <div className='bg-white rounded-lg shadow-xl'>
                {/* <!-- component -->
                    <!-- This is an example component --> */}
                <div className="max-w-2xl mx-auto bg-white p-5 text-gray-600 mb-10">
                    <ul>
                        <li>1. All users of this website must be aged 18 or over.</li>
                        <br />
                        <li>2. Personal information collected from users of this website will be used solely for the purposes of maintaining the blood donor and patient database. This information will be kept secure and confidential.</li>
                        <br />
                        <li>3. The website is intended for use by blood donors and patients, and any other use is strictly prohibited.</li>
                        <br />
                        <li>4. All users must adhere to the terms and conditions of use of this website, and any violations of these terms and conditions may result in the suspension or termination of the user’s account.</li>
                        <br />
                        <li>5. The content of this website is provided “as is” and no warranties are given.</li>
                        <br />
                        <li>6. The owners of this website are not responsible for any damages or losses incurred by users as a result of using this website.</li>
                        <br />
                        <li> 7. Users must not use this website in any way that could damage, disable, overburden, or impair the website or interfere with any other user’s use.</li>
                        <br />
                        <li>8. Users must not use this website to transmit any viruses, worms, malware, or any other malicious or destructive code.</li>
                        <br />
                        <li>9. Users must not use this website to transmit any unsolicited or unauthorized advertising, promotional materials, “junk mail”, “spam”, or any other form of solicitation.</li>
                        <br />
                        <li>10. Users must not use this website to collect or store personal data about other users.</li>
                        <br />
                        <li>11. The owners of this website reserve the right to change these terms and conditions at any time. Users must check these terms and conditions regularly for any changes.</li>
                        <br />
                        <li>12. These terms and conditions shall be governed by the laws of the country in which the website is based.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TAndC