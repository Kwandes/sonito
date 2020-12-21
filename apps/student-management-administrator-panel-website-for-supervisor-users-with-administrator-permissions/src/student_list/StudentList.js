import React from 'react';
import HttpService from "../service/HttpService";
import './StudentList.css'
import StudentRow from "./StudentRow";

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
            let supervisor = student.supervisor;
            if (!supervisor)
            {
                supervisor = {
                    id: '',
                    name: 'No supervisor',
                    email: ''
                }
            }

            return (
                <div className={'StudentInfoRow'} key={index}>
                    <StudentRow id={student.id} name={student.name} email={student.email} supervisor={supervisor}/>
                    {/*<label>Name: <input className={'StudentInfo'} type="text" value={student.name}/></label>*/}
                    {/*<label>Email: <input className={'StudentInfo'} type="text" value={student.email}/></label>*/}
                    {/*<br/><br/>*/}
                    {/*<label>Supervisor: <input className={'StudentInfo'} type="text"*/}
                    {/*                          value={student.supervisorId}/></label>*/}

                    {/*<input type="button" value={'UPDATE'}/><input type="button" value={'DELETE'}/>*/}
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