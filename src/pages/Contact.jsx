import React from 'react'
import Breadcrumb from '../component/Breadcrumb';
import ContactUs from '../component/ContactUs'

const Contact = () => {
    return (
        <>
            <Breadcrumb title="Contact Us" />
            <ContactUs />


            {/* map start */}
            <div className="prisana-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111722.33817259586!2d76.93869322553226!3d28.94814071238736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x9efbd3cd589b645e!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1793014740936!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Prisana - REXE Industries Location"
                ></iframe>
            </div>
            {/* map end */}
        </>
    )
}

export default Contact
