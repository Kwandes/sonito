import React from 'react';

import CreateStudent from "../create_student/CreateStudent";
import StudentList from "../student_list/StudentList";
import './Home.css'

export default class Home extends React.Component
{
    render()
    {
        return (
            <div id={'home'}>
                <div id={'left'}>
                    <h3>Watashi Yeet</h3>
                    <CreateStudent/>
                </div>
                <div id={'right'}>
                    <StudentList/>
                </div>
            </div>
        )
    }
}