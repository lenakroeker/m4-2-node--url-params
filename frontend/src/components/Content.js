import React from "react";
import styled from "styled-components";

const Content = ({ children }) => <Wrapper>{children}</Wrapper>;

const Wrapper = styled.div`
  padding: 10px 24px 24px;
  border-bottom: 1px solid black;
  text-align: center;
`;

export default Content;
