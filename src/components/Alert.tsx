import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
};

export default Alert;


/**
 * import { useState } from "react";
 import Alert from "./components/Alert";
 import Button from "./components/Button";
 
 function App() {
   const [alertVisible, setAlertVisibility] = useState(false);
   return (
     <div>
       {alertVisible && (
         <Alert onClose={() => setAlertVisibility(false)}>My alert!</Alert>
       )}
       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
     </div>
   );
 }
 
 export default App;
 
 */