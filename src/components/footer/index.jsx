import React from 'react';
import './style.scss'
function FooterComponent(props) {
    return (
        <React.Fragment>
            <footer className="container-fluid py-5 bg-dark mt-4">
                <div className="row">
                    <div className="col-12 col-md">
                        <h5>Product</h5>
                        <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Cool stuff</a></li>
                            <li><a className="link-secondary" href="/">Random feature</a></li>
                            <li><a className="link-secondary" href="/">Team feature</a></li>
                            <li><a className="link-secondary" href="/">Stuff for developers</a></li>
                            <li><a className="link-secondary" href="/">Another one</a></li>
                            <li><a className="link-secondary" href="/">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Resource name</a></li>
                            <li><a className="link-secondary" href="/">Resource</a></li>
                            <li><a className="link-secondary" href="/">Another resource</a></li>
                            <li><a className="link-secondary" href="/">Final resource</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Business</a></li>
                            <li><a className="link-secondary" href="/">Education</a></li>
                            <li><a className="link-secondary" href="/">Government</a></li>
                            <li><a className="link-secondary" href="/">Gaming</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="link-secondary" href="/">Team</a></li>
                            <li><a className="link-secondary" href="/">Locations</a></li>
                            <li><a className="link-secondary" href="/">Privacy</a></li>
                            <li><a className="link-secondary" href="/">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default FooterComponent;