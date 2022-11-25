import "../../App.css";
import DatePicker from "antd/es/date-picker";
import TimePicker from "antd/es/time-picker";
import { Button } from "react-bootstrap";
import {BsSearch} from 'react-icons/bs'

export function SearchBar() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChange2 = (time, timeString) => {
    console.log(time, timeString);
  };

  return (
    <>
<div className="container">
      <div className="search">
        <div className="cityInput">
          <label>Where</label>
          <br />
          <input type="text" placeholder="City , airport , address or hotel" />
        </div>
        <div className="datepicker">
          <label>From</label>
          <br />
          <DatePicker className="dateSel"  onChange={onChange} />{" "}
          <TimePicker className="dateSel" onChange={onChange2} />
        </div>
        <div className="datepicker">
          <label>Untill</label>
          <br />
          <DatePicker className="dateSel" onChange={onChange} />{" "}          <TimePicker className="dateSel" onChange={onChange2} />

        </div>
        <div className="search_btn"> <br /> 
            <Button className="ser_btn" ><BsSearch className="magni"  /></Button>
            <Button className="ser_btn_mob" >Search Car</Button>
        </div>
      </div>
</div>
    </>
  );
}
