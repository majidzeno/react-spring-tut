/** @format */

import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useTransitionExample = () => {
	const [show, setShow] = useState(true);
	const toggle = () => {
		setShow(!show);
	};
	// const transitions = useTransition(items/item,key/null,props)
	const transitions = useTransition(show, null, {
		from: { transform: "translateX(400px)", opacity: 0 },
		enter: {
			transform: "translateX(0px)",
			opacity: 1
		},
		leave: { transform: "translateX(400px)", opacity: 0 }
	});
	return (
		<Wrapper>
			<h1>useTransition Example</h1>
			<Container>
				<ControlPanel>
					<Btn onClick={toggle}>Animate</Btn>
				</ControlPanel>
				<Playground>
					{transitions.map(({ item, props, key }) =>
						item ? (
							<Box key={key} style={props}>
								Box1
							</Box>
						) : (
							<Box key={key} style={props}>
								Box2
							</Box>
						)
					)}
				</Playground>
			</Container>
		</Wrapper>
	);
};

export default useTransitionExample;

// Styles

const Box = styled(animated.div)`
	background-color: #e91e63;
	color: white;
	width: 5em;
	padding: 2em;
	font-size: 1.25rem;
	margin: 1%;
	position: absolute;

	&:nth-child(2) {
		background-color: #9c27b0;
	}
	&:nth-child(3) {
		background-color: #3f51b5;
	}
`;
