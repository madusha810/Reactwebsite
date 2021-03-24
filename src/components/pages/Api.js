import React, { Component, useState } from 'react';
import Axios from 'axios';



const api = Axios.create({
    baseURL: "https://official-joke-api.appspot.com/random_joke"
})

class API extends Component {

    state = {
        courses: []
    }

   constructor(){
       super();
       api.get('/').then(res => {
        console.log(res.data)
        this.setState({ courses: res.data})
       })
   }
  
   /*{this.state.courses.map[course => <h6 key={course.id}>{course.type}</h6>]}*/ 

   /*<h6>{this.state.courses.id}</h6>
                <h6>{this.state.courses.type}</h6>
                <h6>{this.state.courses.setup}</h6>
                <h6>{this.state.courses.punchline}</h6>*/

                /*
                <h6>
                    {this.state.courses.map(course => (
                        <p key={course.id}>
                            {course.type}
                        </p>
                    ))};
                </h6>
                */
    render(){

        return(
            <div>
                <div className="text-center">
                    
                    <table className="table table-bordered">
                      
                        <th>Type</th>
                        <th>Setup</th>
                        <th>punchline</th>
                        
                       

                        <tr>
                        
                        <td> <h6>{this.state.courses.type}</h6></td>
                        <td><h6>{this.state.courses.setup}</h6></td>
                        <td><h6>{this.state.courses.punchline}</h6></td>  

                        </tr>
                       
                        
                    </table>

                   
            
               
                
                </div>
            </div>
        );

    }

}

export default API;