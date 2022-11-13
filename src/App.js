import { useState } from "react";
import "./styles.css";
import { data, findLocation } from "./utils";
const url =
  "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress";
export default function App() {
  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const [background, setBackground] = useState("Northeast");
  const [forms, setForms] = useState([]);

  const change = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    fetch(
      `${url}?address=${form.address} ${form.city} ${form.state} ${form.zip}&benchmark=2020&format=json`
    )
      .then((res) => {
        return res.json;
      })
      .then((res) => {
        setForms([...forms, { id: forms.length, ...form }]);
        const { x: lat, y: long } = res.result.addressMatches[0].coordinates;
        setBackground(findLocation({ lat, long }));
      }).catch(e => {
        setForms([...forms, { id: forms.length, ...form }]);
        const { x: lat, y: long } = data.result.addressMatches[0].coordinates;
        setBackground(findLocation({ lat, long }));
      });
  };

  return (
    <div className="App">
      <form onChange={change}>
        <div className="row">
          <div className="col">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              name="address"
              value={form.address}
              onChange={change}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="city">City:</label>
            <input id="city" name="city" value={form.city} onChange={change} />
          </div>
          <div className="col">
            <label htmlFor="state">State:</label>
            <input
              name="state"
              id="state"
              value={form.state}
              onChange={change}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="zip">Zip:</label>
            <input name="zip" value={form.zip} onChange={change} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={submit} className="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <ul className="address-container">
        {forms.map((form) => {
          return (
            <li className={background} key={form.id}>
              <h2>{background}</h2>
              <div>
                <div>{form.address}</div>
                <div>
                  {form.city}, {form.state}
                </div>
                <div>{form.zip}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
