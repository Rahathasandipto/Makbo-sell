import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../services/services';
import Faq from '../Testimonial/Faq';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>

            <Faq></Faq>

        </div>
    );
};

export default Home;