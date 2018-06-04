import React from 'react'
import { render } from 'react-dom'
import Component from '../../dist'

console.log(Component)
console.log(document.querySelector('#container'))

render(
	<Component />,
	document.querySelector('#container')
)