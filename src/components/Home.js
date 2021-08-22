import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

function Home() {
    return (
        <div className="main-component-home">

            <NavUnlisted>
                <Link to='/first-hooks-examples' style={linkStyle}>
                    <div className="link-card-main-home-component">
                        <h2 className="link-card-main-home-component-h2">
                            First Hooks Example
                        </h2>
                    </div>
                </Link>

                <Link to='/second-hooks-examples' style={linkStyle}>
                    <div className="link-card-main-home-component">
                        <h2 className="link-card-main-home-component-h2">
                            React Hooks Walkthrough
                        </h2>
                    </div>
                </Link>

            </NavUnlisted>

            {/* <div className="link-card-main-home-component-link">
                
            </div>
            
            <div className="link-card-main-home-component-link">
                
            </div> */}
            
        </div>
    )
}

export default Home
