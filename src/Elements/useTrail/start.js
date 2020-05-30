/** @format */

import React, { useState } from "react";
import { animated, useTrail } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, ControlPanel, Playground, Btn } from "../blocks";

const useTrailExample = () => {
	const [animate, setAnimate] = useState(false);
	const toggle = () => {
		setAnimate(!animate);
	};
	const data = [{ title: "Box1" }, { title: "Box2" }, { title: "Box3" }];

	return (
		<Wrapper>
			<h1>useTrail Example</h1>
			<Container>
				<ControlPanel>
					<Btn onClick={toggle}>Animate</Btn>
				</ControlPanel>
				<Playground>
					{data.map((item, i) => (
						<Box key={i}>{item.title}</Box>
					))}
				</Playground>
			</Container>
		</Wrapper>
	);
};

export default useTrailExample;

// Styles
const Box = styled(animated.div)`
	background-color: #ff9800;
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
