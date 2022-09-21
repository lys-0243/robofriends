import React, { useEffect, useState, useMemo } from "react";
import { Form } from "./Form";
import { Link } from "react-router-dom";

const Robots = () => {
  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getRobots = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const robots = await response.json();
        setRobots(robots);
      } catch (error) {
        console.log("error", error);
      }
    };
    getRobots();
  }, []);

  const filtredRobots = useMemo(() => {
    if (robots?.length && searchText.length >= 3) {
      return robots.filter((robot) =>
        robot.name.toUpperCase().includes(searchText.toUpperCase())
      );
    }
    return robots;
  }, [robots, searchText]);

  return (
    <>
      <Form value={searchText} onChange={setSearchText} />
      
      <div className="robots_container">
        {filtredRobots.map((robot, index) => (
          
          <Link to={`/robot/${robot.id}`} key={robot.id} className="robotLinkToDetails">
          <div className="robot-card" key={index}>
            <img src={`https://robohash.org/${robot.id}`} alt="" />
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
          </div>
          </Link>
          
        ))}
      </div>
      
    </>
  );
};

export default Robots;
