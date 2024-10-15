import Nav from "@/(components)/Nav"
import Main from "./Main"
import Heading from "@/(components)/Heading"

export default function about(){
    return(
        <div>
            <Nav place = {5} color='Dark'/>
            
            <Main source="/poster2.png"/>
            <Heading link="/about_us" num="1" blurb="About Us"/>
            <Heading link="/books"  num="2" blurb="People"/>
        </div>
    )
}