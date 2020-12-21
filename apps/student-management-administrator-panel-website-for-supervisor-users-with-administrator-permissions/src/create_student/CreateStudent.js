import React from 'react';
import './CreateStudent.css'
import HttpService from "../service/HttpService";

export default class CreateStudent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.createUser = this.createUser.bind(this);

        this.state = {
            name: "",
            email: "",
            supervisorId: null
        }
    }

    createUser()
    {
        console.log(this.state.name + " " + this.state.email + " " + this.state.supervisorId)

        if (this.state.name === "" || this.state.email === "" || this.state.supervisorId == null)
        {
            alert("You have to fill in all fields before creating a student");
            return;
        }

        HttpService.post("/student", {
            name: this.state.name,
            email: this.state.email,
            supervisor: {
                id: this.state.supervisorId
            }
        })
            .then((response) =>
            {
                console.log("createStudent Response :");
                console.log(response.data);
            })
            .catch((e) =>
            {
                console.log(e);
            });

        window.location.reload(false);
    }

    updateInfo = (type, text) =>
    {
        if (type === 'name')
        {
            this.setState({name: text});
        } else if (type === 'email')
        {
            this.setState({email: text});
        } else if (type === 'supervisorId')
        {
            this.setState({supervisorId: text});
        }
    }

    render()
    {
        return (
            <div id={'StudentContainer'}>
                <h3>Create your very own Student</h3>
                <input type="text" placeholder={"name"} onChange={e => this.updateInfo('name', e.target.value)}/>
                <input type="text" placeholder={"email"} onChange={e => this.updateInfo('email', e.target.value)}/>
                <input type="number" placeholder={"supervisor ID"}
                       onChange={e => this.updateInfo('supervisorId', e.target.value)}/>
                <input type={'button'} id={'CreateStudentBtn'} value={'Create Student'}
                       onClick={() => this.createUser()}/>
            </div>
        )
    }
}