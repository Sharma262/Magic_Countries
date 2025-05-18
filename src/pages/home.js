import React, { useEffect, useState, useRef } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchValue, SetSearchValue] = useState(null);

  const country = JSON.parse(localStorage.getItem("countrylist"));

  useEffect(() => {
    if (country == null) {
      fetch("https://restcountries.com/v2/all")
        .then((e) => e.json())
        .then((e) => {
          setData(e);
          localStorage.setItem("countrylist", JSON.stringify(e));
        });
    } else {
      setData(country);
    }
  }, []);

  const navigateUser = (e) => {
    Navigate(`/country/${e.replaceAll(" ", "-")}`);
  };

  const SearchUser = (e) => {
    SetSearchValue(e.target.value);
  };

  return (
    <div className="Home-table">
      <h1>COUNTRY LIST</h1>
      <div className="seachinpu7">
        <label>search country</label>
        <Input
          size="middle"
          placeholder="search country"
          onChange={(e) => SearchUser(e)}
        />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {data
              ?.filter((e) =>
                searchValue == null || searchValue == ""
                  ? e
                  : e.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((e) => {
                return (
                  <tr key={e.name} onClick={() => navigateUser(e.name)}>
                    <td>{e.name}</td>
                    <td>{e.capital || " no capital"}</td>
                    <td>
                      {e.currencies?.["0"].code || "no curreny"} &nbsp;
                      {e.currencies?.["0"].symbol}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
