import { useRef } from "react";
import Button from "../ui/button"
import styles from './events-search.module.css'

function EventsSearch(props) {
	const yearInputRef = useRef();
	const monthInputRef = useRef();
	const searchEvents =(event) =>{
		event.preventDefault();
		const selectedYear = yearInputRef.current.value;
		const selectedMonth = monthInputRef.current.value;
		props.onSearch(selectedYear,selectedMonth)
	}
	return (
		<form className={styles.form} onSubmit={searchEvents}>
			<div className={styles.controls}>
				<div className={styles.control}>
					<label htmlFor="year">Year</label>
					<select id="year" ref={yearInputRef}>
						<option value={`2021`}>2021</option>
						<option value={`2020`}>2020</option>
						<option value={`2019`}>2019</option>
					</select>
				</div>
				<div className={styles.control}>

				<label htmlFor="month">Month</label>
				<select id="month" ref={monthInputRef}>
					<option value={1}>Jan</option>
					<option value={2}>Feb</option>
					<option value={3}>Mar</option>
					<option value={4}>Apr</option>
					<option value={5}>May</option>
					<option value={6}>Jun</option>
					<option value={7}>July</option>
					<option value={8}>Aug</option>
				</select>
				</div>
			</div>
			<Button onClick={searchEvents}>Find Events</Button>
		</form>
	)
}

export default EventsSearch
