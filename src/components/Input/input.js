import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

class Input extends Component {

    constructor(props) {
        super(props);
        this.inputBox = React.createRef();
    }

    handleClickButton = (event) => {
        event.preventDefault();
        const guessedWord = this.inputBox.current.value;
        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord);
        }
        this.inputBox.current.value = '';
    }

    render() {
        const contents = this.props.success ? null : (
            <form className="form-inline">
                <input 
                    data-test="input-box"
                    ref={this.inputBox} 
                    className="form-control"
                    id="word-guess"
                    type="text"
                    placeholder="enter guess" />
                <button 
                    data-test="submit-button"
                    onClick={this.handleClickButton}
                    className="btn btn-primary"
                    type="submit">
                    Submit
                </button>
            </form>
        )
        return (
        <div data-test="component-input">
            { contents }
        </div>
        );
    }
};

const mapStateToProps = ({success}) => {
    return { success };
}

export default connect(mapStateToProps, {guessWord})(Input);

