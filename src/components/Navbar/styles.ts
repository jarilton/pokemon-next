import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333333;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.text``;

export const Link = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const LinkWrapper = styled.div`
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: #ffffff;
  }
`;
