import React ,{ useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Pdf Reader', price: '$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">

      <Counter> </Counter>

      <Users> </Users>

    <ul>
      {
        products.map(pdd => <li>{pdd.name}</li>)
      }
    </ul>

      {
        products.map(pd => <Product product={pd}></Product>)
      }
    

      <Product product={products[0]}> </Product>
      <Product product={products[1]}> </Product>
      <Product product={products[2]}> </Product>
      </header>
    </div>
  );
}

function Product(props){

  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '300px',
    float: 'left',
    margin: '10px'
  }
  return(
    <div style={productStyle}>
      <h1> {props.product.name} </h1>
      <h2> {props.product.price} </h2>
      <button>Buy Now-></button>
    </div>
  )
}

function Counter(){
  const [count,setCount]= useState(10);
  const handleIncrease = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1); 
  return(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
