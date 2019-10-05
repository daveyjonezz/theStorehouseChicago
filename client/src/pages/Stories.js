import React, { Component } from "react";
// import Nav from "../components/Nav";
import Spacer from "../components/Spacer"
import { StoryContainer, StoryRow, StoryCol } from "../components/Grid";
import { StoryImage } from "../components/ImageCard";
import Modal from "../components/Modal"
import API from "../utils/API";
import { Footer } from "../components/Footer"

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
                from: ""
            }))
            .catch(err => console.log(err));
    };

    render() {

        return (
            <>
                <Spacer />
                <StoryContainer style={conStyle}>

                    <StoryRow rowClass="d-flex flex-row align-items-center centering">
                        <StoryCol colClass="col-6 col-lg-4 my-auto first">
                            <StoryImage StoryImage="bioImage-1 img-fluid" Storyimgsrc="./images/jennidavis2.jpg"></StoryImage>
                        </StoryCol>
                        <StoryCol colClass="col-lg-8 text-back my-auto story1">
                            <h2>Meet Jenni &#38; Davis Birsan</h2>
                            <h5> 
                                Yo Taylor, I’m really happy for you, I’ll let you finish, but Beyoncé has one of the best videos of all time. One of the best videos of all time! Before ya’ll start booing me, I got some words to say. I recently saw that movie, you know Little Miss Sunshine, with that little white girl and that guy from that virgin movie. Anyway, you know, it made me think about things. Now usually, I don’t creep out of the film noir era — all my true boys know that I’m more of a The Postman Always Rings Twice type of brotha. So to say at least, I was skeptical. After the credits rolled and I had eaten my very last Goober, I was just sitting there, stunned. I thought to myself, ‘man, that movie was depressing as shit’ and that ‘some of the characters dilemmas aren’t really central to the plot and actually serve as a significant distraction to the trajectory of the film.’ I was mad. I wanted to know if the filmmaker’s intention was to make a movie about how wack life was or about how off the hook life could be. Now I bet the most of you are wondering, ‘Why on Earth is Kanye on stage, talking about Little Miss Sunshine during someone else’s acceptance speech?’ I guess that is a perfectly fair question. I don’t really know, to be honest, but hear me out for a second. I guess in many ways, I’m that little white girl in the movie. All of this stuff is happening around me, you know being famous, talented, and sexy as shit — but I want more. All I want to do is dance — well, not dance specifically, but I want people to like me for who I am. I thought standing up for Beyoncé was the right move, but it wasn’t. In many ways, Taylor is that little white girl too — well obviously. We all are. And I realize at this moment that I ruined that ‘dancing’ moment for her, and potentially ruined that ‘dancing’ moment for me too. Shit. Well, I hope ya’ll will forgive me. Taylor, I’m sorry. Here’s the mic back. This is the last time I let my Netflix give me suggestions; it makes me think too much. Peace out MTV!”
                            </h5>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                        </StoryCol>
                        <StoryCol colClass="col-lg-4 text-back my-auto story2 noscroll">
                            <h2>Meet Adi Cepela</h2>
                        </StoryCol>
                        <StoryCol colClass="col-6 col-lg-4 my-auto second">
                            <StoryImage StoryImage="bioImage-2 img-fluid" Storyimgsrc="./images/adi3.jpg"></StoryImage>
                        </StoryCol>
                        <StoryCol colClass="col-lg-4 text-back my-auto story2">
                            <h5> 
                            Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.
                            </h5>
                            <h5>
                            Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.
                            </h5>
                            <h5>
                            But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
                            </h5>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                        </StoryCol>
                        <StoryCol colClass="col-lg-8 text-back my-auto story3">
                            <h2>Meet Jimi Loc</h2>
                            <h5> 
                                In West Philadelphia born and raised
                                On the playground is where I spent most of my days
                                Chilling out, maxing, relaxing all cool
                                And all shooting some b-ball outside of the school
                                When a couple of guys who were up to no good
                                Started making trouble in my neighborhood
                                I got in one little fight and my mom got scared
                                And said "You're moving with your auntie and uncle in Bel-Air"
                            </h5>
                            <h5>
                                I begged and pleaded with her day after day
                                But she packed my suitcase and sent me on my way
                                She gave me a kiss and then she gave me my ticket
                                I put my Walkman on and said "I might as well kick it"
                                First class, yo, this is bad
                                Drinking orange juice out of a champagne glass
                                Is this what the people of Bel-Air living like?
                                Hmmm, this might be all right
                                But wait, I hear they're prissy, bourgeois, and all that
                                Is this the type of place that they should send this cool cat?
                                I don't think so, I'll see when I get there
                                I hope they're prepared for the Prince of Bel-Air
                            </h5>
                            <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">Note of Encouragement <i className="fa fa-send" aria-hidden="true"></i> </button>
                        </StoryCol>
                        <StoryCol colClass="col-6 col-lg-4 my-auto third">
                            <StoryImage StoryImage="bioImage-3 img-fluid" Storyimgsrc="./images/jimi3.jpg"></StoryImage>
                        </StoryCol>
                    </StoryRow>
                </StoryContainer>
                <Footer />
                <Modal onChange={this.handleInputChange} statefrom={this.state.from} stateto={this.state.to} statenote={this.state.note} onClick={this.handleFormSubmit} />
            </>
        )
    }

}

export default Stories