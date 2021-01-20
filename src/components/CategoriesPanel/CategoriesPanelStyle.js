import styled from 'styled-components';

export const ListItem = styled.li`
	transition-delay: ${props => props.delay + 'ms'};
`

export const CategoryButton = styled.button`
	background-color: transparent;
	margin-bottom: 10px;
	border: none;

	&:hover {
		color: #5b3c8a;
		font-weight: 600;
	}
`;

export const CategoryDescription = styled.p`
	display: block;
	width: auto;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
