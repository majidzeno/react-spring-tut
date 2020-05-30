/** @format */

import React, { useState, useRef } from "react";
import { animated, useSpring, useChain } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useSpringExample = () => {
	const [move, setMove] = useState(true);
	const springXRef = useRef(null);
	const springYRef = useRef(null);
	const springZRef = useRef(null);

	const animate = () => {
		setMove(!move);
	};

	const springXProps = useSpring({
		ref: springXRef,
		transform: move ? "translateX(0px)" : "translateX(200px)"
	});
	const springYProps = useSpring({
		ref: springYRef,
		transform: move ? "translateY(0px)" : "translateY(200px)"
	});
	const springZProps = useSpring({
		ref: springZRef,
		transform: move ? "translateX(0px)" : "translateX(600px)"
	});
	useChain(
		move
			? [springXRef, springYRef, springZRef]
			: [springZRef, springYRef, springXRef]
	);

	return (
		<Wrapper>
			<h1>useChain Example</h1>
			<Container>
				<ControlPanel>
					<Btn onClick={animate}>Animate</Btn>
				</ControlPanel>
				<Playground>
					<Box style={springXProps}> X</Box>
					<Box style={springYProps}> Y</Box>
					<Box style={springZProps}> Z</Box>
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
	&:nth-child(2) {
		background-color: gold;
	}
	&:nth-child(3) {
		background-color: green;
	}
`;
