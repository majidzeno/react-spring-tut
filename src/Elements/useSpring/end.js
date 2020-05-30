/** @format */

import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useSpringExample = () => {
	const [show, setShow] = useState(true);
	const [move, setMove] = useState(true);
	const fade = () => {
		setShow(!show);
	};
	const toggleMove = () => {
		setMove(!move);
	};
	const springFadeProps = useSpring({
		opacity: show ? 1 : 0
	});
	const springMoveProps2 = useSpring({
		transform: move ? "translateX(0px)" : "translateX(200px)"
	});
	return (
		<Wrapper>
			<h1>useSpring Example</h1>
			<Container>
				<ControlPanel>
					<Btn onClick={fade}>Animate Box1</Btn>
					<Btn onClick={toggleMove}>Animate Box2</Btn>
				</ControlPanel>
				<Playground>
					<Box style={springFadeProps}>Box1</Box>
					<Box2 style={springMoveProps2}>Box2</Box2>
				</Playground>
			</Container>
		</Wrapper>
	);
};

export default useSpringExample;

// Styles

const Box = styled(animated.div)`
	background-color: coral;
	color: white;
	width: 5em;
	padding: 2em;
	font-size: 1.25rem;
	margin: 1%;
`;

const Box2 = styled(Box)`
	background-color: teal;
`;
