export function selectBook(book) {
  // selectBook is an action creator and needs to return an action object
  // with a type
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
