import Header from './components/Header'

const App = () => {

  return (
    //this is actually JSX, not html
    //it will allow to return only one element - on this example is 'div', but could be any other
    <div className='container'>
      <Header />
    </div>
  )
}

export default App;
