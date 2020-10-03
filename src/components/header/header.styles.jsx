import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptaionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease all;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: palevioletred;
    color: #fff;
  }
`;

export const HeaderRight = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 15px;
`;
