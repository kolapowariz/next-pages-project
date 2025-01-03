import { EventListProps } from "../../../types";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";


export default function EventList(props: EventListProps) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}