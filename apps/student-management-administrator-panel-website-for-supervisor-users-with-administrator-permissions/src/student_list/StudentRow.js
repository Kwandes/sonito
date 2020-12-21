import React from 'react';
import './StudentRow.css'
import HttpService from "../service/HttpService";

export default class StudentRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id: [this.props.id],
            name: [this.props.name],
            email: [this.props.email],
            supervisor: {
                id: this.props.supervisor.id,
                name: this.props.supervisor.name,
                email: this.props.supervisor.email,
            }
        }
    }

    componentDidMount()
    {
    }

    updateStudent()
    {
        console.log("name: " + this.state.name);
        console.log("email: " + this.state.email);
        console.log("id: " + this.state.id);
        console.log("super id: " + this.state.supervisor.id);
        HttpService
            .put("/student/" + this.state.id, {
                    id: parseInt(this.state.id), // Javascript types thing is awful
                    name: "" + this.state.name,
                    email: "" + this.state.email,
                    supervisor: {
                        id: this.state.supervisor.id,
                    }
                }
            )
            .then((response) =>
            {
                console.log("Update Student Response :");
                console.log(response.data);

                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                    supervisor: {
                        id: response.data.supervisor.id,
                        name: response.data.supervisor.name,
                        email: response.data.supervisor.email,
                    }
                });
            })
            .catch((e) =>
            {
                console.log(e);
            });
    }

    deleteStudent()
    {
        HttpService
            .delete("/student/" + this.state.id)
            .then((response) =>
            {
                console.log("Delete Student Response :");
                console.log(response.data);

                window.location.reload(false);
            })
            .catch((e) =>
            {
                console.log(e);
            });
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
            <>
                <label>Name: <input className={'StudentInfo'} type="text" defaultValue={this.state.name}
                                    onChange={event => this.setState({name: event.target.value})}/></label>
                <label>Email: <input className={'StudentInfo'} type="text" defaultValue={this.state.email}
                                     onChange={event => this.setState({email: event.target.value})}/></label>
                <br/><br/>
                <label>Supervisor: <input className={'StudentInfo'} type="text"
                                          defaultValue={this.state.supervisor.id}
                                          onChange={event => this.setState({supervisor: {id: event.target.value}})}/></label>

                <input type="button" value={'UPDATE'} onClick={() => this.updateStudent()}/>
                <input type="button" value={'DELETE'} onClick={() => this.deleteStudent()}/>
            </>
        )

    }
}