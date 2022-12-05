import { Footer } from "../footer/footer"
import { Noti } from "../navbar/noti"
import { CollapsibleExample } from "../navbar/navbar"
import { ProfileBanner } from "../banner/banner"
import { Data } from "./data";
import "../../App.css";


export function Profile() {
    return <>
    <Noti />
    <CollapsibleExample />
    <ProfileBanner />
   <Data />
   <br />
   <br />
   <br />
   <br />
   <br />
   <br />

    <Footer />
    </>
}