import React, { Component } from 'react'
import UserService from '../services/UserService';

/**
 * Get events info from rest.
 */

class GetInfoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                infoList: []
        }
        
        
    }

    // step 3
    componentDidMount(){

        UserService.getInfoLog().then((res) => {
            this.setState({ infoList: res.data});
        });
    }
    
    
    
    cancel(){
        this.props.history.push('/usersall');
    }

    getTitle(){
       
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Events Log List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.cancel.bind(this)}> Users List</button>
                 </div>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.getInfo}> Show Events Log</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Information</th>
                                   
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.infoList.map(
                                        inf => 
                                        <tr key = {inf.id}>
                                             <td> { inf.value} </td>   
                                             
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default GetInfoComponent
