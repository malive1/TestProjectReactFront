import React, { Component } from 'react'
import UserService from '../services/UserService';

/**
 * Add user functiondl.
 */
class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            surname: '',
            middleName: '',
            phone: '',
            email: '',
            password: '',
            checkPassword: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);

        this.changeMiddleNameHandler = this.changeMiddleNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
        this.changeConfPassHandler = this.changeConfPassHandler.bind(this);

        this.saveOrUpdateuserRest = this.saveOrUpdateuserRest.bind(this);
        this.getInfo = this.getInfo.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let userRest = res.data;
                this.setState({name: userRest.name,
                    surname: userRest.surname,
                    middleName : userRest.middleName,
                    phone: userRest.phone,
                    email : userRest.email,
                    password: userRest.password,
                    checkPassword : userRest.checkPassword
                });
            });
        }        
    }
    saveOrUpdateuserRest = (e) => {
        e.preventDefault();
        let userRest = {name: this.state.name, surname: this.state.surname, middleName: this.state.middleName,
            phone: this.state.phone,email: this.state.email,password: this.state.password,checkPassword: this.state.checkPassword};
        console.log('userRest => ' + JSON.stringify(userRest));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(userRest).then(res =>{
                this.props.history.push('/usersall');
            });
        }else{
            UserService.updateuserRest(userRest, this.state.id).then( res => {
                this.props.history.push('/usersall');
            });
        }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({surname: event.target.value});
    }

    changeMiddleNameHandler= (event) => {
        this.setState({middleName: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }

    
    changePassHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeConfPassHandler= (event) => {
        this.setState({checkPassword: event.target.value});
    }
    

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/usersall');
    }

    getInfo(){
        this.props.history.push('/get-info/_getInfo');
    }

    getTitle(){
       
    }
    render() {
        return (
            <div>
                 <h2 className="text-center">Add User</h2>
                 <div className = "row">
                 <br></br>
                 </div>
                 <br></br>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.getInfo}> Show Events Log</button>
                 </div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name (Required field. Letters only.): </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Surname (Required field. Letters only.): </label>
                                            <input placeholder="Surname" name="surname" className="form-control" 
                                                value={this.state.surname} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Middlename (Required field. Letters only.): </label>
                                            <input placeholder="Middlename" name="middleName" className="form-control" 
                                                value={this.state.middleName} onChange={this.changeMiddleNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mail Required field. Contains @.: </label>
                                            <input placeholder="Mail" name="mail" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone (Required field. Format: + 7XXXNNNNNNN.): </label>
                                            <input placeholder="Phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password (Required field.): </label>
                                            <input placeholder="Password" type="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePassHandler}/>
                                        </div>

                                        
                                        <div className = "form-group">
                                            <label> Check Password (Required field.): </label>
                                            <input placeholder="Check Password" type="password" name="checkPassword" className="form-control" 
                                                value={this.state.checkPassword} onChange={this.changeConfPassHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateuserRest}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
            
        )
    }
}

export default CreateUserComponent
