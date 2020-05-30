/** @format */

import React, { useState } from "react";
import { animated, useSprings } from "react-spring";
import styled from "styled-components";
import { Wrapper, Container, Playground } from "../blocks";

const useSpringsExample = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const data = [{ title: "Box1" }, { title: "Box2" }, { title: "Box3" }];
	// const springs = useSprings(numberOfItems,itemsProps)
	const springs = useSprings(
		data.length,
		data.map((_, i) => ({
			transform: activeIndex === i ? "translateX(400px)" : "translateX(0px)"
		}))
	);
	return (
		<Wrapper>
			<h1>useSprings Example</h1>
			<Container>
				<Playground>
					{springs.map((itemProps, i) => (
						<Box key={i} style={itemProps} onClick={() => setActiveIndex(i)}>
							{data[i].title}
						</Box>
					))}
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
