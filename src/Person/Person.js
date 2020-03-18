import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium';

import './Person.css';

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width:500px) {
        width: 450px;
    }
`;

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    // return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old! !</p>
    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old! !</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
        // </div>
    )
};

// export default Radium(person);
export default person;