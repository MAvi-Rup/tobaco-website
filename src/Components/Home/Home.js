import React from 'react';
import SideNavbar from '../Shared/SideNavbar';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <SideNavbar />

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Home;