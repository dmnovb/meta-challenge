import { useState } from "react";

let items = [1, 2, 3, 4];

const List = () => {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [selectedTransferedItems, setSelectedTransferedItems] = useState<any>(
    []
  );
  const [addedItems, setAddedItems] = useState<any>([]);

  const selectItems = (item: any, e: any) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(
        selectedItems.filter((selectedItem: any) => selectedItem !== item)
      );
    }
  };

  const transferSelectedItems = () => {
    const remainingItems = items.filter(
      (item: any) => !selectedItems.includes(item)
    );
    setAddedItems([...addedItems, ...selectedItems]);
    setSelectedItems([]);
    items = remainingItems;
  };

  const selectTransferedItems = (item: any, e: any) => {
    if (e.target.checked) {
      setSelectedTransferedItems([...selectedTransferedItems, item]);
    } else {
      setSelectedTransferedItems(
        selectedTransferedItems.filter(
          (selectedItem: any) => selectedItem !== item
        )
      );
    }
  };

  const transferTransferedItems = () => {
    const remainingItems = addedItems.filter(
      (item: any) => !selectedTransferedItems.includes(item)
    );
    setSelectedTransferedItems([]);
    setAddedItems(remainingItems);
    items = [...items, ...selectedTransferedItems];
  };

  return (
    <div className="container">
      <div className="left-container">
        {items.map((item: any) => (
          <div key={item} className="checkbox-container">
            <input
              name={item}
              value={item}
              type="checkbox"
              onChange={(e: any) => selectItems(item, e)}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => transferSelectedItems()}>{">"}</button>
        <button onClick={() => transferTransferedItems()}>{"<"}</button>
      </div>
      <div className="right-container">
        {addedItems?.map((item: any) => (
          <div key={item} className="checkbox-container">
            <input
              key={item}
              name={item}
              type="checkbox"
              value={item}
              onChange={(e) => selectTransferedItems(item, e)}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
