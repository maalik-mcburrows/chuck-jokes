import React, {Component } from 'react';

class Quote extends Component {
    state = {
        quote: "Chuck norris made corona stay inside."
    }
    render() {
        const { quote } = this.state;
        return (
            <p>
                {quote}
            </p>
        );
    }
}

export default Quote;