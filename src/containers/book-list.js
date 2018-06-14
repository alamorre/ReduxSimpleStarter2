import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

// Containers are components with direct access to redux (Using react-redux)
// This last parent to be concerned with redux is the container (i.e. not book-list-item)
class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => { //prepping to be coming from props
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //Whatever is returned from here will show up as props in BookList
  return {
    books: state.books
  };
}

//Whatever is returned from here will show up as props in BookList but from an action
function mapDispatchToProps(dispatch){
  // Whenever selectbook is callled, result is passed to all reducers (i.e. bind actions creators)
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

// Promote booklist from component to container, it needs to know of new
// dispatch method - selectBook. Make it availabel as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
