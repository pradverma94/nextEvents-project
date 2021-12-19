import { useRouter } from 'next/router';
import React from 'react'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data'

function AllEventsPage() {
	const allEvents = getAllEvents();
	const router = useRouter()
	const findEventHandler=(year,month)=>{
		router.push(`/events/${year}/${month}/abc`)
	}
	return (
		<div>
			<EventsSearch onSearch={findEventHandler}/>
			<EventList item={allEvents} />
		</div>
	)
}

export default AllEventsPage
