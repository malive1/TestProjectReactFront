import React, { Component } from 'react'
import UserService from '../services/UserService'

/**
 *View user information.
 */

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    cancel(){
        this.props.history.push('/usersall');
    }

    render() {
        return (
            <div>
                <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.cancel.bind(this)}> Users List</button>
                 </div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User Name: { this.state.employee.name }</label>
                            
                        </div>
                        <div className = "row">
                            <label> User Last Name: { this.state.employee.surname }</label>
                           
                        </div>
                        <div className = "row">
                            <label> User Middle name: { this.state.employee.middleName }</label>
                          
                        </div>
                        <div className = "row">
                            <label> User email: { this.state.employee.email } </label>
                         
                        </div>
                        <div className = "row">
                            <label> User phone:{ this.state.employee.phone } </label>
                           
                        </div>
                    </div>

                </div>
               
            </div>
            
        )
    }
}

export default ViewUserComponent
