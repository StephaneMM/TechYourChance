import React from "react";
import "../styles/AlumniDisplay.css";



const AlumniDisplay = ({handleConversation,  item, handleClose }) => {

  function handleClick(alumni_id) {
    console.log("ALUMNIDISPLAY", alumni_id)
    handleConversation(alumni_id)

    
  }


  return (
    <div className="Item-container">
      <p onClick={handleClose} className="close-link">
        <i className="fas fa-times"></i>
      </p>

      <div className="round-image">
        <img className="user-img mb-5" src={item.image} alt="item" />
      </div>
      <h2 onClick={() => { handleClick(item._id)} }  className="title purple mb-4 pointer">{item.firstName} {item.lastName} <i class="purple fas fa-comments"></i></h2>
      <p className="description text-center"><i className="green fas fa-map-pin"></i> {item.formattedAddress} | {item.neighborhood}</p>
     
      {item.status === "alumni" && 
      <div classNameName="user-info d-flex flex-column">
        <h5 className="green mt-2 mb-3">👉 Presentation</h5>
        <p className="text-left">🤓 {item.intro}</p>
        <p>💼 {item.work}</p>
        <p>🔗 {item.linkedin}</p>
      </div>}
      
    </div>
  );
};

export default AlumniDisplay;