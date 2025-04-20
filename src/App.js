import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillslist />
      </div>
    </div>
  );
}
export default App;

function Avatar() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="avatar"
        alt="Tech Avator"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Samwel Macharia</h1>
      <p>
        Hello, I am a software engineer with a passion for technology and
        innovation. I love to create and build things that make a difference in
        people's lives.
      </p>
    </div>
  );
}

function Skillslist() {
  return (
    <div className="skill-list">
      <Skill name="Javascript 🔥" color="green" />
      <Skill name="React 🔥" color="orange" />
      <Skill name="HTML 🔥" color="pink" />
      <Skill name="CSS 🔥" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
    </div>
  );
}
