import React from 'react'
import styled from 'styled-components'

import { Icon } from 'src/components'
import { useTheme } from 'src/hooks'

const Button = styled.button`
	svg {
		margin-bottom: 4px;
	}
`

const ThemeToggle = () => {
	const [isLight, toggleTheme] = useTheme()

	return (
		<Button onClick={toggleTheme} aria-label="visual theme toggle">
			<Icon name={isLight ? 'Moon' : 'Sun'} />
		</Button>
	)
}

export default ThemeToggle
