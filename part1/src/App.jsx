const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hola perro {props.name}, tenes {props.age} años de edad</p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}
const App = () => {
  let name = 'Otto'
  let age = 33
  return (

    <div>
      <h1>Hola</h1>
      <Hello name='Nata' age={30 + 2} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  )
}

export default App