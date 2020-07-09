import React, {Component as C} from 'react';

import styled from 'styled-components'

const Button = styled.button`
    min-width: 50px;
    display: inline-block;
    margin: 20px;
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    border-radius: 5px;
    background: #4676d7;
    color: #fff;
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background: #1d49aa;
        &:focus {
            outline: none;
            box-shadow: 0 0 0 4px #cbd6ee;
        }
    }
`;

class Counter extends C {
    constructor(props) {
        super(props);
        const {stars} = props;
        this.state = {
            stars
        };
    }

    componentWillReceiveProps(props) {
        if (this.props.stars !== props.stars) {
            console.log(parseInt(props.stars));
            this.setState({
                stars: parseInt(props.stars)
            });
        }
    }

    plus() {
        const stars = +this.state.stars + 1;
        this.setState({stars});
    }

    render() {
        return (
            <div>
                <h3>Autolinker</h3>
                <hr/>
                <Button onClick={() => this.plus()}>
                    <span role="img" aria-label="add">+</span>
                </Button>
                <Stars length={this.state.stars}/>
            </div>
        );
    }
}

const Stars = ({length}) => <span>{Array.from({length}, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

export default Counter;