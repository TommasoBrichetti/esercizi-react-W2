import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {

  state={
    selected: false
  }

  render() {

    return (
      <>
        <Card
          onClick={() => {
            this.props.setFunction(this.props.book)
          }}
          style={{ border: this.props.book === this.props.selected ? '3px solid red' : '3px solid #282c34' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  }
}

export default SingleBook
