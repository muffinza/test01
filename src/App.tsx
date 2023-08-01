import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alart from "./components/Alart";
import Button from "./components/Button";

function App() {
  const [alertVisivle, setAlertVisibility] = useState(false);
  let items = ["Thailand", "Tokyo", "Loas", "Khambodia", "Veit Nam"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <br />
      <hr />
      {alertVisivle && (
        <Alart onClose={()=>setAlertVisibility(false)} >
          hello <span>Mar</span>
        </Alart>
      )}

      <br />
      <hr />
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Mu button
      </Button>
    </div>
  );
}

export default App;
