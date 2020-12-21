import React from 'react';
import HttpService from "../service/HttpService";
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
        /*const students = [
            {name: "Cristi", email: "prucia@hotmail", supervisor: "Jan"},
            {name: "alex", email: "nyan@hotmail", supervisor: "Jan2"},
            {name: "teo", email: "dane@hotmail", supervisor: "Jan3"},
            {name: "Cristi", email: "prucia@hotmail", supervisor: "Jan"},
            {name: "alex", email: "nyan@hotmail", supervisor: "Jan2"},
            {name: "teo", email: "dane@hotmail", supervisor: "Jan3"},
            {name: "Cristi", email: "prucia@hotmail", supervisor: "Jan"},
            {name: "alex", email: "nyan@hotmail", supervisor: "Jan2"},
            {name: "teo", email: "dane@hotmail", supervisor: "Jan3"},
            {name: "Cristi", email: "prucia@hotmail", supervisor: "Jan"},
            {name: "alex", email: "nyan@hotmail", supervisor: "Jan2"},
            {name: "teo", email: "dane@hotmail", supervisor: "Jan3"},
            {name: "Cristi", email: "prucia@hotmail", supervisor: "Jan"},
            {name: "alex", email: "nyan@hotmail", supervisor: "Jan2"},
            {name: "teo", email: "dane@hotmail", supervisor: "Jan3"},
        ]*/
        /*
        this.setState({
            students: students
        })*/

        this.getStudentList();
    }

    getStudentList()
    {
        HttpService
            .get("/student")
            .then((response) =>
            {
                console.log("getStudentList Response :");
                console.log(response.data);

                this.setState({
                    students: response.data,
                });
            })
            .catch((e) =>
            {
                console.log(e);
            });
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