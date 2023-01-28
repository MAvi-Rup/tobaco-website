import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='container-fluid' style={{
                backgroundImage: `url("https://www.batbangladesh.com/group/sites/bat_9t5fq2.nsf/vwPagesWebLive/DO9T5GN5/$FILE/medMDBVMNF8.png?openelement")`
            }}>
                <div className="container d-flex align-items-center" style={{height:'450px'}} >
                    <div>
                        <h1 className='text-white fw-bold fs-1' style={{fontFamily: 'Aeroport,Arial, Helvetica, sans-serif',fontSize: "46px"}}>Building A Better Tomorrow</h1>
                        <p className='text-white'>BAT Bangladesh is committed towards building A Better Tomorrow with an evolved corporate purpose</p>
                        <button className='btn btn-light'>Our Envolope Purpose </button>
                    </div>
                    

                </div>
            </div>

        </>
    );
};

export default Hero;