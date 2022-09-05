import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import { Component } from 'react'
import CommentArea from './components/CommentArea'


class App extends Component {

  state = {
    selected: null,
  }

  setSelected = (value) => this.setState({ selected: value })

  render(){
  return (
    <div className="App">
      <header className="App-header">
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <BookList books={fantasyBooks}  setFnction={this.setSelected} selected={this.state.selected}/>
      </header>
      <aside className='asideComment'>
        <CommentArea asin={this.state.selected?.asin}/>
      </aside>
    </div>
  )}
}

export default App
