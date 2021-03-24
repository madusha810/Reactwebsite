import React, { Component } from 'react';

class newStatemanaging extends Component{

    constructor(){
        super()
        this.state={
            message1: 'Welcome visitor',
            message2: 'Testing state managing',
            message3: 'Before click'
        }
       
    }

    changeMessage1(){
        this.setState({
            message1: 'Thanks for visting'
          
        })
    }

    changeMessage2(){
        this.setState({
            message2: 'text changed'
        })
    }

    changeMessage3(){
        this.setState({
            message3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        })
    }


  render() {
        return(
            <div>
                <div className="container">
                    <div className="row text-center">

                    <div className="col-md-12 mb-4">
                    <h1>State managing</h1>
                    <div className="underLine mx-auto"></div>
                    </div>

                    <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <h6>State 1</h6>
                        <hr/>
                    <div className="card-body">
                        <p>{this.state.message1}</p>
                        <button className="btn btn-danger" onClick={() => this.changeMessage1()}>Click</button>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <h6>State 2</h6>
                        <hr/>
                    <div className="card-body">
                        <p>{this.state.message2}</p>
                        <button className="btn btn-danger" onClick={() => this.changeMessage2()}>Click</button>
                    </div>
                    </div>
                    </div>

                    <div className="col-md-4 mb-4">
                    <div className="card shadow">
                        <h6>State 3</h6>
                        <hr/>
                    <div className="card-body">
                        <p>{this.state.message3}</p>
                        <button className="btn btn-danger" onClick={() => this.changeMessage3()}>Click</button>
                    </div>
                    </div>
                    </div>
                    

                    </div>
                </div>

            </div>
        );
    }

}

export default newStatemanaging