import './Header.css'

function Header({title}) {
  return (
    <div id='header'>
      <h1 className='title'>Hello world</h1>
      <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Header