import React from 'react';
import './BookingTable.css';

const BookingTable = () => {
    return (
        <div className="booking-table-part">
            <div className="container">
                <div className="section-heading">
                    <p>Reservation</p>
                    <h1 className="text-white">Book A Table</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="booking-form">
                            <form action="">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" autocomplete="off" placeholder="Name *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" autocomplete="off" placeholder="Email Address *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select className="form-control">
                                            <option value="1" selected="">Persons *</option>
                                            <option value="2">Number of guests 1</option>
                                            <option value="3">Number of guests 2</option>
                                            <option value="4">Number of guests 3</option>
                                            <option value="5">Number of guests 4</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" autocomplete="off" placeholder="Phone Number *" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="date" className="form-control" placeholder="Date *" data-type="datepicker" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select className="form-control">
                                            <option value="" selected="">Time *</option>
                                            <option value="1">08AM - 10AM</option>
                                            <option value="1">10AM - 12PM</option>
                                            <option value="1">12PM - 02PM</option>
                                            <option value="1">02PM - 04PM</option>
                                            <option value="1">04PM - 06PM</option>
                                            <option value="1">06PM - 08PM</option>
                                            <option value="1">04PM - 10PM</option>
                                            <option value="1">10PM - 12PM</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <textarea type="email" className="form-control" rows="4" placeholder="Your Note *" style={{position: 'relative !important', zIndex: 'auto !important'}}></textarea>
                                    </div>
                                </div>
                                <div className="booking-btn">
                                    <button type="submit">Book A Table</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTable;