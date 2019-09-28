import React from "react";
import "./style.css";

function Modal(props) {
    return (
        <div className="modal fade noteModal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Note of Encouragement</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form action="/api/notes" method="POST">
                    <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="recipient">To:</label>
                                <select className="form-control" id="recipient" name="to" selectedvalue={props.stateto } onChange={props.onChange} >
                                    <option defaultValue>Choose recipient</option>
                                    <option value="Davis and Jenni">Davis &#38; Jenni Birsan</option>
                                    <option value="Adi Cepela">Adi Cepela</option>
                                    <option value="Jimi Loc">Jimi Loc</option>
                                </select>

                                <label htmlFor="note">Note:</label>
                                <textarea className="form-control" rows="5" id="note" name="note" required  value={props.statenote} onChange={props.onChange}  ></textarea>
                                <label htmlFor="from">From:</label>
                                <input className="form-control" rows="1" id="from" name="from" required  value={props.statefrom}  onChange={props.onChange}   ></input>
                            </div>                       
                        </div>
                        <div className="modal-footer">
                            <button type="submit" onClick={props.onClick} className="btn btn-outline-light">Send <i className="fa fa-share" aria-hidden="true"></i></button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Modal
