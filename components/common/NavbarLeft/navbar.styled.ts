import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: #333;
  color: white;
  width: 200px;
  height: 100vh;
  padding-top: 20px;
`;

export const SidebarHeader = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 20px;
`;

export const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;