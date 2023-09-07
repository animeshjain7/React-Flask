import React, { useState, useEffect } from "react";
import BigNumber from "./BigNumber";
import SmallNumber from "./SmallNumber";
import RightNumber from "./RightNumber";

export default function CheckDataComponent({ item }) {
  const [data, setData] = useState({
    num: 0,
  });
// console.log(item);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/random-number");
        const jsonData = await response.json();
        setData({
          num: jsonData.number,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h6>{data.num}</h6>
      {item === undefined ? (
        <h1>Type a Number</h1>
      ) : data.num === +item ? (
        <RightNumber />
      ) : data.num < +item ? (
        <SmallNumber SmallNum={item} />
      ) : (
        <BigNumber BigNum={item} />
      )}
    </>
  );
}
