import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import VMC from './inc/VMC';
import service1 from '../images/2.jpg';

function Home() {
    return (
        <div>
            <Slider/>

       <section className="section">
        <div className="container">

            <div className="row">
            <div className="col-md-12 text-center">

            <h3 className="main_heading">Our company</h3>
            <div className="underLine mx-auto"></div>

            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


            </p>

            <Link to="/about" className="btn btn-warning shadow">Read more</Link>

            </div>
            </div>

        </div>

       </section>

       

        <VMC/>

        <section className="section border-top">
        <div className="container">

            <div className="row">
            <div className="col-md-12 mb-5 text-center">

            <h3 className="main_heading">Our services</h3>
            <div className="underLine mx-auto"></div>

            </div>

                <div className="col-md-4">
                    <div className="card shadow">

                    <img src={service1} className="w-100 border-bottom" alt="Services"/>

                    <div className="card-body">
                        <h6>Services 1</h6>
                        <div className="underLine"></div>

                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="/Services" className="btn btn-link">Read more</Link>
                    </div>

                    </div>

                    

                </div>

                <div className="col-md-4">
                    <div className="card shadow">

                    <img src={service1} className="w-100 border-bottom" alt="Services"/>

                    <div className="card-body">
                        <h6>Services 2</h6>
                        <div className="underLine"></div>

                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="/Services" className="btn btn-link">Read more</Link>
                    </div>

                    </div>

                    

                </div>

                <div className="col-md-4">
                    <div className="card shadow">

                    <img src={service1} className="w-100 border-bottom" alt="Services"/>

                    <div className="card-body">
                        <h6>Services 3</h6>
                        <div className="underLine"></div>

                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Link to="/Services" className="btn btn-link">Read more</Link>
                    </div>

                    </div>

                    

                </div>

                

            </div>

        </div>

       </section>



        </div>
    );


}

export default Home;