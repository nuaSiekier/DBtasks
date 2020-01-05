import React from 'react';
import { BrowserRouter, Link, Route} from "react-router-dom";
import  PostTask  from './PostTask';
import TaskList from './TaskList';

function App() {
  return (
    <BrowserRouter>
    <div>
        <Route path="/PostTask" component={PostTask} />
        <Route path="/TaskList" component={TaskList} />
    </div></BrowserRouter>
  );
}

export default App;
