import EventOwned from "./EventOwned"
import EventInvited from "./EventInvited"
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Switch, Route, Redirect, Link} from 'react-router-dom'

function EventList(props)
{
    
    return( 
        <div id = 'EventListBody'>
            <div id ="Internal-Route">
                <div className="Links">
                    <Link to='/Oevents'>Owned | </Link>
                    <Link to='/Ievents'>Invited</Link>
                </div>
                <Switch>
                    <Route path='/Oevents' component={() => <EventOwned/>}/>
                    <Route path ='/Ievents' component={() => <EventInvited/>}/>
                    <Redirect to='/events'/>
                </Switch>
            </div>
            <div className="content">
                <p><b>CAN WE GET TO THIS PAGE</b></p>
            </div>
        </div>
    )
        //First internal routing failed ->defaulted to login route
        //Use renderFunctions below to load the other pages
}

function RenderOwnedList({page, onclick})
{
    return(
        <EventOwned />
    )
}

function RenderInvitedList({page, onclick})
{
    return(
        <EventInvited />
    )
}


export default EventList