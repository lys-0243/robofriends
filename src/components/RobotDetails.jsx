import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Robot = (props) => {
  const [robot, setRobot] = useState([]);
  const params = useParams();
  const idRobot = params.idRobot;

  useEffect(() => {
    const getSelected = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${idRobot}`
        );
        const robots = await response.json();
        setRobot(robots);
      } catch (error) {
        console.log("error", error);
      }
    };
    getSelected();
  }, [idRobot]);
  console.log(params);

  return (
    <>
      <div className="robot_container__details">
        <div className="robot-card">
          <img src={`https://robohash.org/${idRobot}`} alt="" />
          <h2 className="detail-name">{robot.name}</h2>
        </div>
      </div>

      <div className="info-details">
        <div className="title-info">
          <p>Username</p>
          <p>Adresse e-mail</p>
          <p>Téléphone</p>
          <p>Site internet</p>
        </div>

        <div className="info-data">
          <p>: {robot.username}</p>
          <p>: {robot.email}</p>
          <p>: {robot.phone}</p>
          <p>: {robot.website}</p>
        </div>
        
      </div>
      <hr />
      <div className="link">
        <Link to="/" className="backToHomePage" >RETOUR</Link>
      </div>
      
    </>
  );
};

export default Robot;
