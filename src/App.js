import Header from './components/Header'

const App = () => {
  const name = 'Chico'

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <Header />
    </div>
  );
}



export default App;
