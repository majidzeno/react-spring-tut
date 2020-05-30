/** @format */

import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useSpringExample = () => {
	return (
		<Wrapper>
			<h1>useSpring Example</h1>
			<Container>
				<ControlPanel>
					<Btn>Animate Box1</Btn>
					<Btn>Animate Box2</Btn>
				</ControlPanel>
				<Playground>
					<Box>Box1</Box>
					<Box2>Box2</Box2>
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
