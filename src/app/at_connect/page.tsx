import Nav from "@/(components)/Nav"
import Main from "./Main"
import Heading from "@/(components)/Heading"
import Leadership from "../about_us/Leadership"
import atcon_people from "@/(assets)/People_ATcon.json"


export default function about(){
    return(
        <div>
            <Nav place = {5} color='Dark'/>
            
            <Main source="/poster2.png"/>
            <Heading link="/about_us" num="1" blurb="About Us"/>
<<<<<<< HEAD
            <Heading link="/books"  num="2" blurb="People"/>
=======

            <Heading link="/people"  num="2" blurb="People"/>
            <Leadership leaders={atcon_people} />

            <Heading link="/books"  num="3" blurb="Sponsors"/>
             {/*
            <Heading link="/user/signup"  num="4" blurb="Account"/> */}
>>>>>>> upstream/main
        </div>
    )
}