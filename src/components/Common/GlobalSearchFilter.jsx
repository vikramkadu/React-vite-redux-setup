import React, { useState } from 'react';
import { Col } from 'reactstrap';

//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JobListGlobalFilter = () => {
    const [selectDate, setSelectDate] = useState();
    const dateChange = (date) => {
        setSelectDate(date)
    };
    return (
        <React.Fragment>    
            <Col xxl={2} lg={6}>
                <select className="form-control select2 mb-3 mb-xxl-0">
                    <option>Status</option>
                    <option value="Active">Active</option>
                    <option value="New">New</option>
                    <option value="Close">Close</option>
                </select>
            </Col>
            <Col xxl={2} lg={4}>
                <select className="form-control select2 mb-3 mb-xxl-0">
                    <option>Select Type</option>
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                </select>
            </Col>
            <Col xxl={2} lg={4}>
                <div id="datepicker1">
                    <DatePicker
                        className="form-control mb-3 mb-xxl-0"
                        selected={selectDate}
                        onChange={dateChange}
                    />
                </div>
            </Col>
            <Col xxl={1} lg={4}>
                <div className='mb-3 mb-xxl-0'>
                    <button type="button" className="btn btn-soft-secondary w-100">
                        <i className="mdi mdi-filter-outline align-middle"></i> Filter</button>
                </div>
            </Col>
        </React.Fragment>
    )
};
export default JobListGlobalFilter;

