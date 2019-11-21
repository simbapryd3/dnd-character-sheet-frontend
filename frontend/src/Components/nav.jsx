import React from 'react';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <nav role='navigation'>
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./user.html">UserForm</a></li>
                    <li><a href="./character.html">CharacterForm</a></li>
                    <li><a href="./stats.html">StatsForm</a></li>
                    <li><a href="./final-character-output.html">Character Sheet</a></li>
                </ul>
                </nav> 

          );
    }
}
 
export default Navigation;