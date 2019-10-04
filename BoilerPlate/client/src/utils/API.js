import axios from "axios";

export default {
  getItemsFromData: function(){
    return axios.get("/")
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