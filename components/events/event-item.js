import Image from "next/image";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import styles from './event-items.module.css'

function EventItem(props) {
	const {title, image, date, location, id} = props;
	const readableDate = new Date(date).toLocaleDateString('en-US',{day:'numeric',month:'long',year:"numeric"});
	const formattedAddress = location.replace(', ','\n');
	const exploreLink = `/events/${id}`;

	return (
		<li className={styles.item} >
			<Image
			// loader={myLoader}
			 src={`/${image}`} alt={title} height={400} width={400} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
				</div>
				<div className={styles.date}>
					<DateIcon />
					<time >{readableDate}</time>
				</div>
				<div className={styles.address}>
					<AddressIcon />
					<address>{formattedAddress}</address>
				</div>
				<div className={styles.actions}>
					<Button link={exploreLink}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon />
						</span>
						</Button>
				</div>
			</div>
			
		</li>
	)
}

export default EventItem
