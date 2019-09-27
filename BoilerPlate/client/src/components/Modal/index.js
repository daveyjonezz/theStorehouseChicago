import React from "react";
import "./style.css";

function Modal() {
    return (
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Note of Encouragement</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="recipient">To:</label>
                                <select className="form-control" id="recipient">
                                    <option selected disabled>Choose recipient</option>
                                    <option>Davis and Jenni Birsan</option>
                                    <option>Adi Cepela</option>
                                    <option>Jimi Loc</option>
                                </select>

                                <label for="note">Note:</label>
                                <textarea className="form-control" rows="5" id="note"></textarea>
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-light" data-dismiss="modal" >Send <i className="fa fa-share" aria-hidden="true"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
