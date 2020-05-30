/** @format */

import React, { useState, useRef } from "react";
import { animated, useSpring, useChain } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useSpringExample = () => {
	return (
		<Wrapper>
			<h1>useChain Example</h1>
			<Container>
				<ControlPanel>
					<Btn>Animate</Btn>
				</ControlPanel>
				<Playground>
					<Box key="x"> X</Box>
					<Box key="y"> Y</Box>
					<Box key="z"> Z</Box>
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
