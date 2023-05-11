import styled from "./Button.module.css";

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button onClick={onClick} className={[styled.btn , styled["btn-" + color]].join(" ")}>
      {/* <button onClick={onClick} className={("btn btn-" + color , styled.btn)}> */}
      {children}
    </button>
  );
};

export default Button;
