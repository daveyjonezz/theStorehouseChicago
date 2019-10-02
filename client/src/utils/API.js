import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  createNote: function(noteData){
    console.log(noteData)
    return axios.post("/api/notes", noteData)
  },
  newsletter: function(emailData){
    console.log(emailData)
    return axios.post("/api/newsletter", emailData)
  },
  getItemsFromData: function(){
    return axios.get("/merch")
  },
   getUserShoppingCart: function() {
     console.log(this.getUserShoppingCart, 'GET the user shopping cart*********')
    return axios.get("/api/usercart");
  },
  deleteItem: function(id) {
    return axios.delete("/api/usercart/" + id);
  },
  
  saveItemToCart: function(UserShoppingCartData) {
    console.log("in the post=======", UserShoppingCartData)
    return axios.post("/api/usercart", UserShoppingCartData);
  }

};