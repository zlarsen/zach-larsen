import React from 'react'
import styled from 'styled-components'

import { Link, MetaText } from 'src/components'

const StyledLink = styled(Link)`
	color: var(${props => (props.inFooter ? '--dark' : '--text')}) !important;
	display: block;
	margin: 1rem -1rem -1rem;
	padding: 1rem;
	text-decoration: none;

	& + & {
		margin-top: calc(4rem + 1vw);
	}

	> * {
		margin: 0;
	}

	> ${MetaText} {
		margin-top: 1rem;
	}
`

const PostLink = ({
	post: {
		fields: { readingTime },
		frontmatter: { date, path, subtitle, title },
	},
	inFooter,
}) => (
	<StyledLink to={path} inFooter={inFooter}>
		<h4>{title}</h4>
		<MetaText italic>
			{date} • {readingTime.text}
		</MetaText>
		{subtitle ? <MetaText>{subtitle}</MetaText> : null}
	</StyledLink>
)

export default PostLink
