import React, { Component } from 'react'
import UserService from '../services/UserService'

/**
 *Show users list.
 */

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userRestList: []
        }
        this.getUsers = this.getUsers.bind(this);
        this.getInfo = this.getInfo.bind(this);
        this.edituserRest = this.edituserRest.bind(this);
        
    }

   
    viewuserRest(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    edituserRest(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ userRestList: res.data});
        });
    }

    getUsers(){
        this.props.history.push('/add-employee/_add');
    }

    getInfo(){
        this.props.history.push('/get-info/_getInfo');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.getUsers}> Add User</button>
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
                                    <th> User name</th>
                                    <th> User Last Name</th>
                                    <th> User Middle name</th>
                                    <th> User email</th>
                                    <th> User phone</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.userRestList.map(
                                        userRest => 
                                        <tr key = {userRest.id}>
                                             <td> { userRest.name} </td>   
                                             <td> {userRest.surname}</td>
                                             <td> {userRest.middleName}</td>
                                             <td> {userRest.email}</td>
                                             <td> {userRest.phone}</td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewuserRest(userRest.id)} className="btn btn-info">View </button>
                                             </td>
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

export default ListUserComponent
