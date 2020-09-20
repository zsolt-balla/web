import React from 'react';
import './misc.css';

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
            
            <div className="mapContainer">
                <iframe title="GoogleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11307.510271760571!2d19.04346338736033!3d47.50870566880804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc1046d4a33d%3A0x342122b8ff8f0f6e!2sHungarian%20Parliament%20Building!5e1!3m2!1sen!2shu!4v1598885784082!5m2!1sen!2shu"
                  style={mapStyle}></iframe>
            </div>

            <div className="contactPanel">
                <p>Phone: +36 12 3456789</p>
                <p>Mailing Address: PO 876543</p>
                <p>Location: Kossuth Square, Budapest, HU</p>
            </div>
        </div>
  );
}
export default Contact;
