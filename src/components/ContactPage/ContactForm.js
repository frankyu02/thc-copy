import axios from "axios";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { __BREAKPOINTS } from "../../styles/utils/variables";
import { Contact, FormWrapper } from "./ContactFormStyles";

export default function ContactForm(){
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleFirst = (e) => {
        setFirst(e.target.value);
    }
    const handleLast = (e) => {
        setLast(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    var enable = !first || !last || !email;
    console.log(enable); 
    const handleOnSubmit = e => { 
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/81c9c57d-901e-455b-be8a-4a3f915a91a6",
            data: new FormData(form)
        })
        .then(r => {
            handleServerResponse(true, "Thanks for contacting us! Form Sent Successfully", form);
        })
        .catch(r => {
            handleServerResponse(false, r.response?.data?.error, form);
        });
    };
    return(
            <FormWrapper>
                <Fade cascade direction="up">
                    <h2>GET IN TOUCH</h2>
                    <p>Send us a message or leave us your email to become a THC member. <br /> <br />
                    Stay in the know with the latest THC news, newest collections, deals and special offers for you.</p>
                </Fade>
                <Fade>
                    <Contact>
                        <form onSubmit={handleOnSubmit}>
                            <div className="group">
                                <p>FIRST NAME *</p>
                                <input type="text" name="FIRST NAME" id="Firstname" className="form-control" aria-describedby="NameInput" placeholder="FIRST NAME" required="required" onChange={handleFirst}/>
                            </div>
                            <div className="group">
                                <p>LAST NAME *</p>
                                <input type="text" name="Last NAME" id="Lastname" className="form-control" aria-describedby="NameInput" placeholder="LAST NAME" required="required" onChange={handleLast}/>
                            </div>
                            <div className="group">
                                <p>EMAIL *</p>
                                <input type="email" name="Email" id="email" className="form-control" aria-describedby="Email" placeholder="your email" required="required" onChange={handleEmail}/>
                            </div>
                            <div className="group">
                                <p>Message</p>
                                <textarea type="textarea" name="message" id="message" className="form-control" aria-describedby="message" placeholder="your MESSAGE"/>
                            </div>
                            <div className="form-end">
                                <button type="submit" className="form-button-submit"  disabled={serverState.submitting || enable}>
                                    SUBMIT
                                </button>
                            </div>
                            {serverState.status && (
                                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                                </p>
                            )}
                        </form>
                    </Contact>
                </Fade>
            </FormWrapper>
    )
}