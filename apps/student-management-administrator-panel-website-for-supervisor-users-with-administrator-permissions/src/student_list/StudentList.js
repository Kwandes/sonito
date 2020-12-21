import React from 'react';
import './StudentList.css'

export default class StudentList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount()
    {
        const students = [
            {name: "Cristi", email: "prucia@hotmail"},
            {name: "alex", email: "nyan@hotmail"},
            {name: "teo", email: "dane@hotmail"},
            {name: "Cristi", email: "prucia@hotmail"},
            {name: "alex", email: "nyan@hotmail"},
            {name: "teo", email: "dane@hotmail"},
            {name: "Cristi", email: "prucia@hotmail"},
            {name: "alex", email: "nyan@hotmail"},
            {name: "teo", email: "dane@hotmail"},
            {name: "Cristi", email: "prucia@hotmail"},
            {name: "alex", email: "nyan@hotmail"},
            {name: "teo", email: "dane@hotmail"},
            {name: "Cristi", email: "prucia@hotmail"},
            {name: "alex", email: "nyan@hotmail"},
            {name: "teo", email: "dane@hotmail"},
        ]
        this.setState({
            students: students
        })
    }

    render()
    {
        const studentList = this.state.students.map((student, index) =>
        {
            return (
                <div>
                    <ul key={index}>
                        <li>{student.name} - {student.email}</li>
                    </ul>
                </div>
            )
        });

        return (
            <div id={'StudentList'}>
                {studentList}
            </div>
        )
    }
}