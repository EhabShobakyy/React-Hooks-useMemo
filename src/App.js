import React, {useState, useMemo} from 'react';

const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const FullName = useMemo(() => <div style={{color: randomColour()}}>{firstName} {lastName}</div>, 
    [firstName, lastName]);

  return (
    <div>
      
      FullName: {FullName}
      Age: {age}
      <br />

      <input value={firstName} placeholder='First Name' onChange={(e => setFirstName(e.target.value))} />
      <input value={lastName} placeholder='Last Name' onChange={(e => setLastName(e.target.value))} />
      <input type='number' value={age} placeholder='Age' onChange={(e => setAge(e.target.value))} />
    </div>
  );
}

export default App;
