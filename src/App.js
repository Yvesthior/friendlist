import React from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      job: "developer",
      name: "john"
    },
    {
      img: 28,
      job: "Designer",
      name: "Bob"
    },
    {
      img: 75,
      job: "artist",
      name: "peter"
    }
  ];
  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        voluptatibus, reprehenderit iste aliquam consequatur labore eligendi
        unde earum tempore ea omnis amet nobis molestiae dicta dolor voluptatem
        totam delectus non.
      </Person>
      <Person person={people[2]} />
    </section>
  );
};
const Person = props => {
  const { img, job, name } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="friend" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
