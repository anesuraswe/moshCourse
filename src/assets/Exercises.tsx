// My solution

interface Props {
  buttonText: string;
}
const Button = ({ buttonText }: Props) => {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className="btn btn-warning" onClick={handleClick}>
      {buttonText}
    </div>
  );
};

export default Button;

// import Button from "./components/Button";


// function App() {
  
//   return (
//     <div>
//             <Button buttonText="Click me!"/>
//     </div>
//   );
// }

// export default App;