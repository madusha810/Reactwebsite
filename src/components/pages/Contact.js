import React from 'react';

function Contact() {
    return (
        <div>
        <section className="py-4 bg-info">
        <div className="container">
        
        <div className="row">
        <div className="col-md-4 my-auto">
        <h6>Contact us</h6>

        </div>

        <div className="col-md-8 my-auto">
            <div className="float-end">
                Home   /   Contact us
            </div>
        </div>
        </div>

        </div>
        </section>


        <section className="section">
            <div className="container">

            <div className="card shadow">
                <div className="card-body">

                <div className="row">
                    <div className="col-md-6">

                <h6>Contact form</h6>
                <hr/>
                <div className="form-group">
                <label for="" className="mb-1">Full name</label>
                <input type="text" name="" className="form-control" value="" placeholder="Enter full name"/>
                </div>

                <div className="form-group">
                <label for="" className="mb-1">Phone number</label>
                <input type="text" name="" className="form-control" value="" placeholder="Enter phone number"/>
                </div>

                <div className="form-group">
                <label for="" className="mb-1">E-mail address</label>
                <input type="text" name="" className="form-control" value="" placeholder="Enter email address"/>
                </div>

                <div className="form-group">
                <label for="" className="mb-1">Message</label>
                
                <textarea rows="3" className="form-control" placeholder="Enter message"></textarea>
                </div>

                <div className="form-group py-3">
                
                <button className="btn btn-primary shadow w-100">submit</button>

                </div>

                    </div>

                    <div className="col-md-6 text-center border-start">
                        <div className="main_heading">Address Information</div>
                        <div className="underLine mx-auto"></div>

                        <p>Lorem Ipsum is simply dummy text </p>

                        <p>Lorem Ipsum is simply dummy text </p>

                        <p>Lorem Ipsum is simply dummy text </p>
                        
                     </div>
                </div>

                </div>
            </div>

            </div>
        </section>

        </div>
    );


}

export default Contact;