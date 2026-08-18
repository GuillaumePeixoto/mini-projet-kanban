import { Link } from "react-router-dom";

function SideBar() {

    return(
        <div id="side-bar">
            <div>
                <Link to={'/'}>
                Board
                </Link>
                <Link to={'/addTask'}>
                Add Task
                </Link>
                <Link to={'/About'}>
                About
                </Link>
                
            
            </div>
        </div>
    );
}

export default SideBar;