import React from "react";
import { Link } from "react-router-dom";

class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>About</h2>
                <p>This app uses React.</p>
                <Link to="/">Home Page</Link>
            </React.Fragment>
        )
    }
}

export default AboutPage;