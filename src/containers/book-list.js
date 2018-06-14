import React, {Component} from 'react';
import {connect} from 'react-redux';

// Containers are components with direct access to redux (Using react-redux)
// This last parent to be concerned with redux is the container (i.e. not book-list-item)
class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => { //prepping to be coming from props
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
