import { useEffect, useState } from "react";

type Starship = {
  id: number;
  name: string;
  technicalName: string;
  color: string;
};

type People = {
  id: number;
  name: string;
  eyeColor: string;
  starshipId: number;
};

function App() {
  const [starsshipdata, setStarshipdata] = useState<Starship[]>([]);
  const [peopledata, setPeopledata] = useState<People[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/starships")
      .then((response) => response.json())
      .then((json) => setStarshipdata(json));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((response) => response.json())
      .then((json) => setPeopledata(json));
  }, []);

  return (
    <>
      <div className="ueberschrift">
        <h1>Backend Light Intro</h1>
      </div>
      <div className="site">
        <div className="starshipsDiv">
          <h2>STARSHIPS</h2>
          {starsshipdata.map((starship) => (
            <div className="starshipsCards" key={starship.id}>
              <h3>{starship.name}</h3>
              <p>Technical Name: {starship.technicalName}</p>
              <p>Color: {starship.color}</p>
            </div>
          ))}
        </div>
        <div className="peopleDiv">
          <h2>PEOPLE</h2>
          {peopledata.map((people) => (
            <div className="peopleCards" key={people.id}>
              <h3>{people.name}</h3>
              <p>Eye Color: {people.eyeColor}</p>
              <p>Starship Id: {people.starshipId}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
