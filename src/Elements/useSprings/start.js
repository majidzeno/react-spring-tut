/** @format */

import React, { useState } from "react";
import { animated, useSprings } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, Playground } from "../blocks";

const useSpringsExample = () => {
	return (
		<Wrapper>
			<h1>useSprings Example</h1>
			<Container>
				<Playground>
					<Box>Box</Box>
				</Playground>
			</Container>
		</Wrapper>
	);
};

export default useSpringsExample;

// Styles

const Box = styled(animated.div)`
	background-color: #2196f3;
	color: white;
	width: 5em;
	padding: 2em;
	font-size: 1.25rem;
	margin: 1%;
	&:nth-child(2) {
		background-color: red;
	}
	&:nth-child(3) {
		background-color: green;
	}
`;
