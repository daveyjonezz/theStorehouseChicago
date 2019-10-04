import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
<<<<<<< HEAD
import Spacer from "../components/Spacer"
import Section from "../components/Section"
import { Row, Container, Col } from "../components/Grid";
import Fade from 'react-reveal/Fade';
=======

>>>>>>> f0cc23015bf7886d44cb7d863c62e42196368848
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
<<<<<<< HEAD
      <div>
        <Container>
     <Spacer></Spacer>
     <Section background="static">
     <Row>
       <Fade left duration={1000}>
      <div className="UserShoppingCart cart-list">
       
          <ol>
       
          {this.state.usershoppingcart.map(usershoppingcart =>
            <Col size="md-12">
         <li className="cartitem">
         <h3>&#x2022;{usershoppingcart.item}</h3 >
              <img style={{height:"100px", borderRadius:"50%"}}alt={usershoppingcart.item} src={usershoppingcart.img} />
              {/* <p>{usershoppingcart.description}</p> */}
              <p>item's Price ${usershoppingcart.price}.00</p>
              <p>Size: {usershoppingcart.size}</p>
              <p>Quantity: {usershoppingcart.quantity}</p>
              <p>Donation: ${usershoppingcart.userDonation}</p>
              <h6><b>SubTotal: ${usershoppingcart.price * usershoppingcart.quantity }.00</b></h6>
              <DeleteBtn onClick={() => this.handleItemDelete(usershoppingcart._id)} />
              </li>
              <br></br>
              <hr></hr>
            
            </Col>
           )}
       </ol>
       
        
       
       
      </div>
      </Fade>

      <Fade right duration={1000}>
      <div className="itemtotal">
      <h3><b>Total:</b>${total}.00</h3>

        <p><a className="returntocart" href="/merch"><strong>ADD MORE TO CART</strong></a></p>
        </div>
        </Fade>
      </Row>
      
      </Section>
      </Container>
    </div>
          );
=======
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
>>>>>>> f0cc23015bf7886d44cb7d863c62e42196368848
  }

}

export default Cart;
