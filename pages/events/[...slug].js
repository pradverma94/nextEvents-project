import { useRouter } from "next/router"
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage () {
	const router = useRouter()
	const filterData = router.query.slug;
	if(!filterData){
		return <p className="center">loading</p>
	}
	const filteredY = +filterData[0];
	const filteredMonth = +filterData[1];

	if(isNaN(filteredY) || isNaN(filteredMonth) ){
		return <p className="center">Invalid filters</p>

	}
	console.log(filteredY,filteredMonth)

	const filteredEventData = getFilteredEvents({year:filteredY,month:filteredMonth});

	if(!filteredEventData || filteredEventData.length === 0){
		return <p className="center">No event found</p>
	}
	return (
		<div>
			<EventList item={filteredEventData}/>
		</div>
	)
}

export default FilteredEventsPage
