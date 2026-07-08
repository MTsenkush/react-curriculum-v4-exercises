//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Mariia';
  const age = 39;
  const hobbies = [
    'Stydying',
    'Dog training',
    'Reading',
    'Traveling',
    'Moovies',
    'Gym',
  ];
  return (
    <div>
      {/* add JSX here */}
      <h1>About me.</h1>
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <h2>My hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
