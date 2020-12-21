import React from 'react';
import './StudentRow.css'

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

    render()
    {

        return (
            <>
                <label>Name: <input className={'StudentInfo'} type="text" value={this.state.name}/></label>
                <label>Email: <input className={'StudentInfo'} type="text" value={this.state.email}/></label>
                <br/><br/>
                <label>Supervisor: <input className={'StudentInfo'} type="text"
                                          value={this.state.supervisor.name}/></label>

                <input type="button" value={'UPDATE'}/><input type="button" value={'DELETE'}/>
            </>
        )

    }
}