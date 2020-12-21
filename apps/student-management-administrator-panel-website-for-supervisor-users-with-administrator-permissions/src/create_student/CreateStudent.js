import React from 'react';
import './CreateStudent.css'

export default class CreateStudent extends React.Component
{
    render()
    {
        return (
            <div id={'StudentContainer'}>
                <h3>Create your very own Student</h3>
                <input type="text" placeholder={"name"}/>
                <input type="text" placeholder={"email"}/>
                <input type="number" placeholder={"supervisor ID"}/>
            </div>
        )
    }
}