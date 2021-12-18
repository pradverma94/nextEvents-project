import Head from 'next/head'
import Image from 'next/image'
import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'
import styles from '../styles/Home.module.css'

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList item={featuredEvents}/>
    </div>
  )
}
