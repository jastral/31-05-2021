import react, { Component } from 'react'
import './styles/main.css'


class Heading extends Component {

    render() {
        return (
            <div>
                <div className="recipies">
                    <h1> { this.props.itemHeading } </h1>
                </div>

                <div>
                    <h3>How to make rasam:</h3>
                </div>
            </div>
        )
    }

}

export default Heading;