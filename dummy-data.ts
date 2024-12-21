import { DateFilter, Event } from './types'

const DUMMY_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: 'This is a first event',
    location: 'Some place',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description: 'This is a second event',
    location: 'New Wall Street 5, 98765 New York',
    date: '2021-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description: 'This is a third event',
    location: 'Some place',
    date: '2021-06-30',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents(): Event[] {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents(): Event[] {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: DateFilter): Event[] {
  const { year, month } = dateFilter;
  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
  return filteredEvents;
}

export function getEventById(id: string): Event | undefined {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
