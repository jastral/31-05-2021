import react, { Component } from 'react'




class Ingredients extends Component {

    render() {
        return (
            <div>
                <ol>
                    { this.props.list.map((item, index) => <li key={ index }> { item } </li> ) }
                </ol>
            </div>
        )
    }

}

export default Ingredients;