import { useRouter } from "next/router"
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
	const router = useRouter()
	const eventId = router.query.eventId;
	const event = getEventById(eventId)
	if(!event){
		return <div><h1>No event found</h1></div>
	}
	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics date={event.date} address={event.location} image={event.image} alt={event.title} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	)
}

export default EventDetailPage
