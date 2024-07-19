
import Card from "./Card";
import placeholderImage from '../assets/images/1B4A2755.jpg';
import { Link } from "react-router-dom";

const EventGrid = () => {
    const artItems = [
        { id: 1, title: 'event 1', description: 'Description of first event', price: '', image: placeholderImage },
        { id: 2, title: 'event 2', description: 'Description of second event', price: '', image: placeholderImage },
        { id: 3, title: 'event 3', description: 'Description of third event', price: '', image: placeholderImage },
        { id: 4, title: 'event 4', description: 'Description of fourth event', price: '', image: placeholderImage },
        { id: 5, title: 'event 5', description: 'Description of fifth event', price: '', image: placeholderImage },
        { id: 6, title: 'event 6', description: 'Description of sixth event', price: '', image: placeholderImage },
      ];
    return (
        <div className="w-full grid grid-cols-2 gap-4">
        {artItems.map(item => (
            <Link to={`/artvituso/events/${item.id}`} key={item.id}>
              <Card 
                image={item.image} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
              />
            </Link>
          ))}
      </div>
    );

};

export default EventGrid;