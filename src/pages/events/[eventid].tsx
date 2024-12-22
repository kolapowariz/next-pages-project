import { useRouter } from 'next/router';
import { getEventById } from '../../../dummy-data';

export default function EventDetailPage() {
  const router = useRouter();

  const eventId: string | undefined = router.query.eventid as string | undefined;
  const event = eventId ? getEventById(eventId) : undefined;

  if (!event) {
    return <p>No event found!</p>;
  }
  
  return (
    <div>
      <h1>Event Detail Page</h1>
    </div>
  );
}