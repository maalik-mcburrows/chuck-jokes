import React, {Component } from 'react';

class Quote extends Component {
    state = {
        quote: "Getting quote from API"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                quote: "Chuck norris made corona stay inside."
            })
        }, 2000);
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