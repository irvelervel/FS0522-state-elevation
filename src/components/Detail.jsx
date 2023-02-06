import { Alert } from 'react-bootstrap'

const Detail = ({ selectedValueFromApp }) => (
  // now Detail receives a prop, the same "selected" value living in its
  // parent's state, App
  <Alert variant="success">{selectedValueFromApp}</Alert>
)

export default Detail
