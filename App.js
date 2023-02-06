import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import Table from './components/Table'
import Detail from './components/Detail'
import { Component } from 'react'

class App extends Component {
  // HERE!!
  // but App is a functional component
  // 1) transform App in a Class Component, in order to be able to have a state
  // 2) move here Table's state object
  // 3) restore Table's functionalities passing down to it via props the value
  // of "selected" and "changeAppState", a method capable of changing it

  state = {
    selected: undefined,
    // selected can become "First", "Second" or "Third"
  }

  changeAppState = (elementClicked) =>
    // this method changes the value of "selected" in App's state object
    // we can really just write it here, since this.setState for changing App
    // has to be called inside App
    this.setState({ selected: elementClicked })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selectedValueFromApp={this.state.selected} // blu arrow in diagram
                  changeAppStateFromApp={this.changeAppState} // red arrow in diagram
                />
              </Col>
              <Col className="my-auto">
                <Detail selectedValueFromApp={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App

// Components in React are often involved in relationships (parent/children)
// We know these kind of relationships are essential to make data travel
// because PROPS travel just from top -> bottom (parent -> child)
// So, we have in this app the Table component which holds a state, and we'd
// like to share this state also with Detail component which is a sibling of
// Table
// The only React-embedded way (ootb) is to ELEVATE the state from Table
// until we reach a common parent of Detail as well
