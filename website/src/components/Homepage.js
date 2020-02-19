import React, {Component} from "react";
import Footer from './Footer'
import NavBar from './NavBar'

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <p>Header2</p>
                <NavBar />
                <header className="Homepage-header">
                    <p>
                        Daniel MacRae
                    </p>
                </header>
                <Footer />
            </div>
        )
    }
}

export default Homepage