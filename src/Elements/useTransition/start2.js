/** @format */

import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useTransitionExample = () => {
	return (
		<Wrapper>
			<h1>useTransition Example</h1>
			<Container>
				<ControlPanel>
					<Btn>Animate</Btn>
				</ControlPanel>
				<Playground>
					<Box>Box</Box>
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
