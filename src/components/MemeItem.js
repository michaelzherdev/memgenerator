import React, { Component } from 'react';
import '../styles/index.css';
import { connect } from 'react-redux';
import { createMeme } from '../actions';
//import { newMeme } from '../actions';

class MemeItem extends Component {
    constructor() {
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
        console.log('this.props', this.props);
        const { text0, text1 } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
        //this.props.newMeme(memeObj);
    }

    render() {
        return(
            <div className="meme-item"
                onMouseEnter={() => this.setState({ hovered: true})}
                onMouseLeave={() => this.setState({ hovered: false})}
                onClick={() => this.postMeme()}>
                <img src={this.props.meme.url}
                    alt={this.props.meme.name} 
                     className={this.state.hovered ? "meme-img darken-img" : "meme-img"}
                    />
                <p className={this.state.hovered ? "meme-txt" : "no-txt"}>
                    {this.props.meme.name}
                </p>
            </div>
        );
    }
};

export default connect(null, { createMeme })(MemeItem);
//export default connect(null, { newMeme })(MemeItem);