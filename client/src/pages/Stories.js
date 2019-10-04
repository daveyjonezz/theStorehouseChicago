import React, { Component } from "react";
// import Nav from "../components/Nav";
import Spacer from "../components/Spacer"
import { StoryContainer, StoryRow, StoryCol } from "../components/Grid";
import { StoryImage } from "../components/ImageCard";
import Modal from "../components/Modal"
import API from "../utils/API";
import Footer from "../components/Footer"

const conStyle = {
    height: '80%',
    display: 'flex',
};
class Stories extends Component {

    state = {
        to: "",
        note: "",
        from: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, " : ", value)
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.createNote({
            to: this.state.to,
            note: this.state.note,
            from: this.state.from
        })
            .then(this.setState({
                to: "",
                note: "",
                from:""}))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <>
                <Spacer />
                <StoryContainer style={conStyle}>
 
                    <StoryRow rowClass="d-flex flex-row align-items-center centering">
                        <StoryCol colClass="col-6 col-lg-4 my-auto first">
                            <StoryImage StoryImage="bioImage-1 img-fluid" Storyimgsrc="/images/jennidavis.jpg"></StoryImage>
                        </StoryCol>
                        <StoryCol colClass="col-lg-8 text-back my-auto story1">
                            <h2>Meet Jenni &#38; Davis Birsan</h2>
                            <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias?</h5>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                        </StoryCol>
                        <StoryCol colClass="col-lg-4 text-back my-auto story2 noscroll">
                            <h2>Meet Adi Cepela</h2>
                        </StoryCol>
                        <StoryCol colClass="col-6 col-lg-4 my-auto second">
                            <StoryImage StoryImage="bioImage-2 img-fluid" Storyimgsrc="/images/adi2.jpg"></StoryImage>
                        </StoryCol>
                        <StoryCol colClass="col-lg-4 text-back my-auto story2">
                            <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias?</h5>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                        </StoryCol>
                        <StoryCol colClass="col-lg-8 text-back my-auto story3">
                            <h2>Meet Jimi Loc</h2>
                            <h5> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nesciunt ea nam cum, fuga, facere est ipsum a totam fugiat rem quod excepturi magnam. Delectus, amet suscipit. Placeat, molestias?</h5>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                        </StoryCol>
                        <StoryCol colClass="col-6 col-lg-4 my-auto third">
                            <StoryImage StoryImage="bioImage-3 img-fluid" Storyimgsrc="/images/jimi2.jpg"></StoryImage>
                        </StoryCol>
                    </StoryRow>
                </StoryContainer>
                <Footer/>
                <Modal onChange={this.handleInputChange} statefrom={this.state.from} stateto={this.state.to} statenote={this.state.note} onClick={this.handleFormSubmit} />
            </>
        )
    }

}

export default Stories