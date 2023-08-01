import { /*MouseEvent,*/ useState } from "react";
interface Props{
  items:string[],
  heading:string,
  onSelectItem:(item:string)=>void;
}
function ListGroup({items,heading,onSelectItem}:Props) {
  //let items = ["Thailand", "Tokyo", "Loas", "Khambodia", "Veit Nam"];
  //let selectedItem = 0
  //items = [];
  //items.map((item) =>/* <li>{item}</li>*/);

  // Event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  //   console.log("from handle click");
  // };

  // Hook
  const [selectedIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1> {heading} </h1>
      {items.length === 0 ? <p>No item found </p> : null}
      {items.length === 0 && <p>No item found </p>}
      <ul className="list-group">
        {
          // {items.map((item,index) => (
          // /*<li key={item} onClick={handleClick} className={ selectedItem === index ? 'list-group-item active' : 'list-group-item' }>{item}</li>*/
          //))}

          items.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setSelectIndex(index);
                onSelectItem(item);
              }}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item}
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
