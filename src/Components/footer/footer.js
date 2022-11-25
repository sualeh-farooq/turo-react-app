import "../../App.css";
import {BsFacebook ,BsTwitter ,BsInstagram ,BsYoutube } from 'react-icons/bs';
import GooglePlay from "../../assets/playstore.png"
import IOS from "../../assets/appstore.png"

export function Footer() {
    return <>
    <div className="footer">
        <div className="container">
            <div className="footer_space">
                <List head="Turo" one="Team" three="Policies" four="Careers" five="Open Road" six="Turo Shop" />
                <List head="Locations" one="USA (EN)" three="Canada (EN)" four="Canada (FR)" five="UK (EN)" />
                <List head="Explore" one="Book a car" three="Weddings" four="Trust & Safety" five="Sustainability" six="Get Help" />
                <List head="Hosting" one="List your car" three="Carculator" four="All Star Hosts" five="Host tools" six="Insurance & Protection" />
                <Badges />
            </div>
        </div>
    </div>
    </>
}

export function List({head,one,two,three,four,five,six}) {
    return <>
    <ul className="footer_li">
        <li><b>{head}</b></li>
        <br />
    <li>{one}</li>
    <li>{two}</li>
    <li>{three}</li>
    <li>{four}</li>
    <li>{five}</li>
    <li>{six}</li>
    </ul>
    
    </>
}

export function Badges() {
    return <>


<div className="footer_icons">
    
    <div className="social_icons">
<BsFacebook className="icon" />
<BsTwitter className="icon" />
<BsInstagram className="icon" />
<BsYoutube className="icon"/>
    </div>
    <br />
    <div className="play_icon">
        <img src={GooglePlay} alt="Google Play Icon"/>
        <img src={IOS} alt="App Store" />
    </div>
</div>
   
    </>
}

export function Plays() {
return <>
  <div className="play_icon">
        <img src={GooglePlay} alt="Google Play Icon"/>
        <img src={IOS} alt="App Store" />
    </div>
</>
}