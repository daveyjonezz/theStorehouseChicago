import React, {Component} from "react";
// import Nav from "../components/Nav"
import Section from "../components/Section"
import { Row, Container, Col } from "../components/Grid";

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Spacer from "../components/Spacer"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import JumbotronFooter from "../components/JumbotronFooter"
import API from "../utils/API";
import SaveButton from "../components/SaveButton";
import items from "../components/ProductsToBuy";
import donation from "../components/Donation";
class Donate extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items,
          usershoppingcart: [],
          sizeValue: "",
          // size: props.size,
          donation,
          donationAmount: "",
          quantityValue: "",
        }
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleDonationAmount = this.handleDonationAmount.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
      };
    
      componentDidMount() {
        //  console.log(this.state.size)
      }
    
      handleSizeChange = (e) => {
        console.log("EEEEEE")
        console.log(e.target.value)
        this.setState({
          sizeValue: e.target.value,
        });
      }
    
      handleDonationAmount = (e) => {
        console.log("AAAAAAAA")
        console.log(e.target.value)
        this.setState({
          donationAmount: e.target.value,
        })
      }
    
      handleQuantityChange = (e) => {
        console.log("IIIIIIIII")
        console.log(e.target.value)
        this.setState({
          quantityValue: e.target.value,
        });
      }
    
      handleAddItemToCart = item => {
        console.log(item, 'this is an item===== ')
        console.log(this.state.usershoppingcart, "current state of shopping cart")
    
        const newUserShoppingCart = this.state.usershoppingcart
        newUserShoppingCart.push(item)
        console.log(newUserShoppingCart, 'this is the shop cart')
    
        this.setState({
          usershoppingcart: newUserShoppingCart
        })
    
        let size = this.state.sizeValue;
        newUserShoppingCart.push(size);
        console.log(size, "this is the size going through*******")
    
        let userDonation = this.state.donationAmount
        newUserShoppingCart.push(userDonation);
        
        console.log(userDonation, "this is user donation $$$$$$$$")
        console.log(newUserShoppingCart.price, "$$$$$$$$$$$ donation $$$$$$$$")
    
        let newquantity = this.state.quantityValue
        newUserShoppingCart.push(newquantity);
        console.log(newquantity, "how many ---------------")
    
        console.log("STATE")
        console.log(this.state.usershoppingcart)
    
        API.saveItemToCart({
            item: this.state.usershoppingcart[0].item,
            img: this.state.usershoppingcart[0].img,
            description: this.state.usershoppingcart[0].description,
            // price: this.state.usershoppingcart[0].price,
            price: this.state.donationAmount > 0 ? this.state.donationAmount : this.state.usershoppingcart[0].price,
      
            size: this.state.usershoppingcart[1],
            quantity: this.state.donationAmount > 0 ? 1 : this.state.usershoppingcart[3],
            userDonation: this.state.usershoppingcart[2]
          })
        .then(result => {
           console.log(result.data, "--in save item to cart")
           this.setState = {
            // usershoppingcart: [],
            sizeValue: "",
            donationAmount: "",
            quantityValue: "",
          }
          this.props.history.push("/usercart")
    
          // }).then(console.log(this.saveItemToCart, "IN SAVE ITEM TO CART ----------"))
          // .then(() => API.getUserShoppingCart())
    
         });
        }
        render(){
return(
    <>
    <Spacer/>
    <Container>
    {/* <Nav/> */}
        <Fade>
            <Section background = "initial">
                    <Row>
                        <Bounce delay={500}>
                            <Col size="md-12">
                                <h1 style={{fontSize:"10vh"}}>Donate</h1>
                            </Col>
                        </Bounce>
                    </Row>
            </Section>
        </Fade>

<Section background="merch2">
<Row>

<Col size="md-12">
<Fade top cascade duration={1000}>
    <div className="text-center">
    <p><h2>Why donate?</h2></p>
    <p><h4>Every dollar makes an impact on the lives of the individuals being featured on The Storehouse Chicago. Donating can help give these families and individuals the tools they need to take that step forward to tomorrow, which seems almost guaranteed for the majority.</h4></p>
    </div>
    </Fade>
    </Col>

</Row>
</Section>

<Section background="merch3">
<Row>
    <div className="">
    <Col size="md-12">
        <Fade left cascade duration={1500}>
        <img src="/images/adi2.jpg" alt="adi" style={{height:"200px", padding:"10px"}}/>
 
   
        <img src="/images/jennidavis.jpg" alt="jennidavis" style={{height:"200px", padding:"10px"}}/>
  
    
        <img src="/images/jimi2.jpg" alt="jimi" style={{height:"200px", padding:"10px"}}/>
        </Fade>

    </Col>
    </div>
</Row>

</Section>
<Section background="merch4">
    <Row>
        <Col size="md-12">
        <p><a className="returntostories" href="/stories"><strong>Read their stories</strong></a></p>
        </Col>
    </Row>
</Section>
    
    <div className="ProductDisplay text-center">


      <Fade right duration={1000}>
<Section background="merch2">
<Row>
          {this.state.donation.map(donation => {
            return (
              <>
              <Col size="md-12">
                <h4>{donation.item}</h4>
                <img style={{height:"100px", borderRadius:"50%"}} alt={donation.item} src={donation.img} />
                <p>{donation.description}</p>
                <p>{donation.size}</p>
                <textarea onChange={this.handleDonationAmount}
                  donationAmount={this.state.donationAmount}
                  rows="1" cols="5" placeholder="$$$" className="userDonation"></textarea>
                              <SaveButton onClick={() => {
                  console.log('donation', donation)
                  console.log('items-state', this.state)
                  this.handleAddItemToCart(donation);
                  // alert("Added to cart!");
                  console.log(this.handleAddItemToCart, "this is in the save button click");
                }
                }>
                </SaveButton></Col></>
            )
          })}
        </Row>
        </Section>
        </Fade>
      </div>
      
 <JumbotronFooter></JumbotronFooter>
 </Container>
 
</>
    );
  }
}
export default Donate;


