export default function BusinessHours(props) {
    return ( 
        <div className='Hours'>
        {props.isOpen ? <p>OPEN NOW</p> : <p>Closed</p>}
        <h1>Hours</h1>
        <p>Monday: {props.monStart} - {props.monClose}</p>
        <p>Tuesday: {props.tuesStart} - {props.tuesClose} </p>
        <p>Wednesday: {props.wedStart} - {props.wedClose}</p>
        <p>Thursday: {props.thursStart} - {props.thursClose}</p>
        <p>Friday: {props.friStart} - {props.friClose}</p>
        <p>Saturday: {props.satStart} - {props.satClose}</p>
        <p>Sunday: {props.sunStart} - {props.sunClose}</p>
        </div>
     );
}