import React from "react";
import {
  useParams
} from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [{
    id: "p1",
    title: "Empire State Building U1",
    description: "One of the most famous sky scrapers in the world",
    imageUrl: "https://webheads-g9n1f8q3p5.netdna-ssl.com/wp-content/uploads/2018/04/newyor-api.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "My Home at Yangon",
    description: "One of the most famous sky scrapers in the world",
    imageUrl: "https://webheads-g9n1f8q3p5.netdna-ssl.com/wp-content/uploads/2018/04/newyor-api.jpg",
    address: "Manawhari Avenue",
    location: {
      lat: 16.789413,
      lng: 96.1332658
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items = {
    loadedPlaces
  }
  />;
};

export default UserPlaces;