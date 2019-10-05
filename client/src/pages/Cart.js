import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Spacer from "../components/Spacer"
import Section from "../components/Section"
import { Row, Container, Col } from "../components/Grid";
import Fade from 'react-reveal/Fade';
import {Footer2} from "../components/Footer"

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
      <>
        <Container>
     <Spacer></Spacer>
     <Section background="static">
     <Row>
       <Fade left duration={1000}>

       <iframe className="checkout" src="https://stripe-thestorehousechicago.herokuapp.com/"></iframe>
       <Col size="sm-1"></Col>
      <div className="UserShoppingCart cart-list">
       
          <ol>
       
          {this.state.usershoppingcart.map(usershoppingcart =>
            <Col size="md-12">
         <li className="cartitem">
           <br></br>
         <h3>{usershoppingcart.description}</h3 >
              <img style={{height:"100px", borderRadius:"50%"}}alt={usershoppingcart.item} src={usershoppingcart.img} />
              {/* <p>{usershoppingcart.description}</p> */}
              <br/>
              <br/>
              <p>Price ${usershoppingcart.price}.00</p>
              <p>Color: {usershoppingcart.item}</p>
              <p>Size: {usershoppingcart.size}</p>
              <p>Quantity: {usershoppingcart.quantity}</p>
              <p>Donation: ${usershoppingcart.userDonation}</p>
              <p><strong>Subtotal: ${usershoppingcart.price * usershoppingcart.quantity }.00</strong></p>
              <DeleteBtn onClick={() => this.handleItemDelete(usershoppingcart._id)} />
              </li>
              <br></br>
              <hr></hr>
            
            </Col>
           )}
       </ol>
       
       <div className="itemtotal">
      <h3><b>Total:</b>${total}.00</h3>

        <p><a className="returntocart" href="/merch"><strong>Add More to Cart</strong></a></p>
        </div>
       
       
      </div>
      </Fade>

      <Fade right duration={1000}>

        </Fade>
      </Row>
      
      </Section>
      </Container>
      <Footer2/>
    </>
          );
  }
}
export default Cart;