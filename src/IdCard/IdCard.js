import React from "react";

const IdCard = function IdCard(props){
    return (
      <div>
          <ul>
              <li>lastName={props.lastName}</li>
              <li>firstName={props.firstName}</li>
              <li>gender={props.gender}</li>
              <li>height={props.height}</li>
              <li>birth={props.birth}</li>
              <li> <img src={props.picture}/></li>
          </ul>
      </div>
    )
}

export  default IdCard;