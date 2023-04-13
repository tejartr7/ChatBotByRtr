import React from "react";

export default function Options({ array, selectType }) {
  return (
    <>
      <div className="grid-main">
        {array.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectType(item.type)}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}