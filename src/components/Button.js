import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  const onClick = (e) => {
    alert('Hello!');
  }

  return (
        <button 
        onClick={onClick}
        style={{ backgroundColor: 'blue'}} 
        className='btn'>{text}</button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}


Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}


export default Button