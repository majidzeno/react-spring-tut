/** @format */

import styled from "styled-components";

export const Wrapper = styled.div`
	text-align: center;
	position: relative;
	h1 {
		border-bottom: 1px solid;
		padding-bottom: 1%;
	}
`;
export const Container = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: center;
	height: 100vh;
`;

export const ControlPanel = styled.div`
	flex: 1;
	border-right: 1px solid;
	padding: 2%;
`;
export const Playground = styled.div`
	flex: 3;
	padding: 2%;
	position: relative;
`;

export const Btn = styled.button`
	border: 2px solid;
	background-color: black;
	color: white;
	padding: 1em;
	margin-top: 2em;
	font-size: 1.5rem;
	cursor: pointer;
`;
