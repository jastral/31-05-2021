import react, { Component } from 'react'


class Preparation extends Component {

    render() {
        return (
            <div>
                <p>
                    { this.props.instructions }
                </p>
            </div>
        )
    }

}

export default Preparation;