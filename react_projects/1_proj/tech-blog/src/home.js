import {useState} from 'react';

const Home = () => {

    // let name = 'maria';
    const [name, setName] = useState('maria');
  const handleClick = () => {
    setName('Jibola');
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name }</p>
      <button onClick= {handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
