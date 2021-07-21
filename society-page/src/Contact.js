import React from 'react';
import './style.css';

var mapStyle={
  width: "100%",
  height: "100%",
  frameborder: "0",
  allowfullscreen: "",
  ariaHidden: "false",
  tabindex: "0"
}

function Contact() {
  return (
    <div className="Contact">
            <div className="contactPanel">
                <p>Phone: +XXXX XXXXXX</p>
                <p>Mailing Address: PO XXXXXXX</p>
                <p>Location: London</p>
            </div>
            <div className="mapContainer">
                <iframe title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9932.034840085662!2d-0.1173517!3d51.5130562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7cf28e36d5dddd5d!2sBush%20House!5e0!3m2!1sen!2shu!4v1626817595557!5m2!1sen!2shu"
                  style={mapStyle}></iframe>
            </div>
        </div>
  );
}
export default Contact;
