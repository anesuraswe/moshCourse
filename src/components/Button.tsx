interface Props {
  children: string;
  color?: 'primary' | 'warning' | 'success' // optional
  onClick: () => void;
}

// 'warning' is the default value for color
const Button = ({ children, onClick, color = 'warning'  }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
