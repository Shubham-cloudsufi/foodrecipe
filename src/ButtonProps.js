import styled from "styled-components";

const ButtonProps = styled.button`
  color: white;
  /* padding: 0; */
  transition: ${(props) => (props.transition ? props.transition : null)};
  transform: ${(props) => (props.disabled ? null : props.transform)};
`;

const Button = styled.button`
  color: white;
  /* padding: 0; */
  transition: ${(props) => (props.transition ? props.transition : null)};
  transform: ${(props) => (props.disabled ? null : props.transform)};
`

export { ButtonProps, Button };
