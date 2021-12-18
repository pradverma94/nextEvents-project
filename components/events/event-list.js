import EventItem from "./event-item"
import styles from './event-list.module.css'

const EventList = (props)=>{
	const {item} = props
	return <ul className={styles.list}>
		{item.map((event)=> 
			<EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
		)}
	</ul>

}
export default EventList