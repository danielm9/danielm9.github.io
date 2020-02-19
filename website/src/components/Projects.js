import React, {Component} from "react";
import Footer from './Footer'
import NavBar from './NavBar'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <p>Header2</p>
                <NavBar />
                <header className="Projects-Header">
                    <p>
                        This is my projects.
                    </p>
                </header>
                <Footer />
            </div>
        )
    }
}

export default Projects