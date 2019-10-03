import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";

class Cart extends Component {
  state = {
    usershoppingcart: [],
    price: 0,
    total: 0
  };

  componentDidMount() {
    API.getUserShoppingCart()
      .then(res => {
        this.setState({ usershoppingcart: res.data })
      })
      .catch(err => console.log(err));
  };


  postUserShoppingCart = () => {
    console.log("inside post++++++++")
    API.getUserShoppingCart(this.props.match.params.id)
      .then(res => this.setState({ usershoppingcart: res.data }))
      .catch(err => console.log(err));
  };

  handleItemDelete = id => {
    API.deleteItem(id).then(res => this.postUserShoppingCart());
  };

  subTotal = (price, quantity, userDonation) => {
    // if(userDonation===0){
    //   return price = userDonation;
      
    // }
   
    // this.setState({
    //   price: this.state.usershoppingcart.userDonation
    // })
    console.log("WE ARE IN THE CART SUBTOTAL")
    console.log(this.state.usershoppingcart)
    return (price * quantity + userDonation)/ 10
  }


  total = () => {
    let tempTotal = 0
    this.state.usershoppingcart.map(elem => {
      tempTotal = tempTotal + ( elem.price * elem.quantity + elem.userDonation)
    })
    console.log("TOTAL", tempTotal)
    return tempTotal
    // this.setState({
    //   total: tempTotal

    // })
  }

  render() {
    const total = this.total();
    console.log("indisde the render:", this.state.usershoppingcart)
    return (
      <div className="UserShoppingCart">
        <ul>
          {this.state.usershoppingcart.map(usershoppingcart =>
            <li>
              <h1>{usershoppingcart.item}</h1>
              <img alt={usershoppingcart.item} src={usershoppingcart.img} />
              <p>{usershoppingcart.description}</p>
              <p>${usershoppingcart.price}.00</p>
              <p>{usershoppingcart.size}</p>
              <p>{usershoppingcart.quantity}</p>
              <p>{usershoppingcart.userDonation}</p>
              <DeleteBtn onClick={() => this.handleItemDelete(usershoppingcart._id)} />
              <h4>Current SubTotal: ${usershoppingcart.price * usershoppingcart.quantity + usershoppingcart.userDonation}.00</h4>

            </li>
          )}
        </ul>
        <b>Total:</b><br />${total}.00
      </div>

    );
  }

}

export default Cart;
