import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button text={"ADD"} onClick={onAdd} />
		</header>
	)
}

Header.defaultProps = {
	title: 'Cloud Application Development - EX1',
}

Header.propTypes = {
	title: PropTypes.string,
}

export default Header
