import EventOwned from "./EventOwned"
import EventInvited from "./EventInvited"
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';


function EventList(props)
{
    return( 
        <div id = 'EventListBody'>
            <div id ="Internal-Route">
                <EventOwned />
                <EventInvited />
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