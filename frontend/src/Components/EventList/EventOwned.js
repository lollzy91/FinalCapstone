import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from '../../Shared/baseUrl'

export default function EventOwned({event})
{
    return( 
        <div className = 'Body'>
            <div className="Header">Invited Events</div>
                <div className="Content">
                    <div className="EventList">
                        <table>
                            {/*
                            <Card>
                                <Link to = {`/events/${event.id}`}>
                                    <CardImg width="100%" src={baseUrl + event.image} alt={event.name} />
                                        <CardImgOverlay>
                                            <CardTitle> { event.name }</CardTitle>
                                        </CardImgOverlay>
                                </Link>
                            </Card>  
                            */}       
                            <tr>
                                <th>Event name / ID</th>
                                <th>Event orgin</th>
                                <th>Time limit / Date of response</th>
                            </tr>
                            <tr>
                                <th>Event name / ID</th>
                                <th>Event orgin</th>
                                <th>Time limit / Date of response</th>
                            </tr>
                            <tr>
                                <th>Event name / ID</th>
                                <th>Event orgin</th>
                                <th>Time limit / Date of response</th>
                            </tr>
                        </table>
                    </div>
                    <p>THIS IS THE INVITED LIST</p>
                </div>
        </div>
    )
        //Body
        //LI of the events owned
        //Each one selected routes to specific ID of event
        //Changes to finale page after time
}
