import React, { Component } from 'react';
import './App.css';

class TaskList extends Component {

componentDidMount(){
fetch('https://localhost:44397/api/tasksdb')
.then(resp=> resp.json())
}

render() {
    return (
        <div>
            {data.map((v) => {
                return <title={v.this.state.name} imgLink={v.imgLink} surename={v.surname} />
            })}
        </div>
    )
}
}


export default TaskList