import React from 'react';
import VMC from './inc/VMC';

function Aboutus() {
    return (
       <div>

        <section className="py-4 bg-info">
        <div className="container">
        
        <div className="row">
        <div className="col-md-4 my-auto">
        <h6>About us</h6>

        </div>

        <div className="col-md-8 my-auto">
            <div className="float-end">
                Home   /   About us
            </div>
        </div>
        </div>

        </div>
        </section>

        <section className="section border-bottom">
        <div className="container text-center">
        <h6 className="main_heading">Our Company</h6>
        <div className="underLine mx-auto"></div>

        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        </div>
        </section>

        <VMC/>

       </div>
    );


}

export default Aboutus;