import React, {
  useRef,
  useEffect
} from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fpc2FpYW50IiwiYSI6ImNrODh5N2JpMzAxYmozbHFub2ZvZDV0ZjgifQ.2HorxBpthorWkgnW60VgFA";

const Map = props => {
  const mapRef = useRef();
  const {
    center,
    zoom
  } = props;
  useEffect(() => {
    // eslint-disable-next-line
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom
    });
  }, [center, zoom]);

  return ( <
    div ref = {
      mapRef
    }
    className = {
      `map ${props.className}`
    }
    style = {
      props.style
    } >
    < /div>
  );
};

export default Map;