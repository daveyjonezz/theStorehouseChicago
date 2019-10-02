import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Spacer from "../components/Spacer"
import Section from "../components/Section"
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
  subTotal = (price, quantity) => {
    // if(userDonation===0){
    //   return price = userDonation;
      
    // }
   
    // this.setState({
    //   price: this.state.usershoppingcart.userDonation
    // })
    console.log("WE ARE IN THE CART SUBTOTAL")
    console.log(this.state.usershoppingcart)
    return (price * quantity )
  }
  total = () => {
    let tempTotal = 0
    this.state.usershoppingcart.map(elem => {
      tempTotal = tempTotal + ( elem.price * elem.quantity )
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
      <div>
     <Spacer></Spacer>
     <Section background="static">
  
      <div className="UserShoppingCart">
        <ul>
          {this.state.usershoppingcart.map(usershoppingcart =>
      
            <li>
              <h1>{usershoppingcart.item}</h1>
              <img style={{height:"250px"}}alt={usershoppingcart.item} src={usershoppingcart.img} />
              <p>{usershoppingcart.description}</p>
              <p>${usershoppingcart.price}.00</p>
              <p>{usershoppingcart.size}</p>
              <p>{usershoppingcart.quantity}</p>
              <p>{usershoppingcart.userDonation}</p>
              <DeleteBtn onClick={() => this.handleItemDelete(usershoppingcart._id)} />
              <h4>Current SubTotal: ${usershoppingcart.price * usershoppingcart.quantity }.00</h4>
            </li>
           )}
        </ul>
        <b>Total:</b><br />${total}.00
        <a href="/merch"><strong>ADD MORE TO CART</strong></a>
      </div>
     
       
      
      </Section>
      
    </div>
          );
  }
}
export default Cart;