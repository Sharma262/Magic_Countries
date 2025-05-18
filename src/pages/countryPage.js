import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CountryDetail() {
  const [data, setData] = useState();
  const { name } = useParams();

  useEffect(() => {
    const country = JSON.parse(localStorage.getItem("countrylist"));
    country?.filter((e) =>
      e.name.toLowerCase() == name.replaceAll("-", " ").toLowerCase()
        ? setData(e.capital)
        : null
    );
  }, []);
  return <div className="capital">{data || "NO CAPITAL"}</div>;
}
