import React, { Component } from 'react';
import styles from './NoteList.module.css';

class NoteList extends Component {
    #title = '';

    set title(title) {
        this.#title = title.replace(/\d|\s/g, '');
    }

    get title() {
        return `***${this.#title}***`;
    }

    componentDidMount() {
        this.title = this.props.title;
    }

    render() {
        return (
            <>
                <h2>{this.title}</h2> {}
                <ul>
                    {this.props.children}
                </ul>
            </>
        );
    }
}

export default NoteList;