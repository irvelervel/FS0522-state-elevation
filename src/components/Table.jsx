import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Table extends Component {
  checkSelected = (value) =>
    value === this.props.selectedValueFromApp ? 'selected' : ''

  render() {
    return (
      <>
        <ListGroup className="text-dark">
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'First' })}
            // we don't want to set a local state anymore!
            onClick={(e) => this.props.changeAppStateFromApp('First')}
            className={this.checkSelected('First')}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Second' })}
            onClick={(e) => this.props.changeAppStateFromApp('Second')}
            className={this.checkSelected('Second')}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            // onClick={(e) => this.setState({ selected: 'Third' })}
            onClick={(e) => this.props.changeAppStateFromApp('Third')}
            className={this.checkSelected('Third')}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          Local state is {this.props.selectedValueFromApp || 'undefined'}
        </p>
      </>
    )
  }
}

export default Table
