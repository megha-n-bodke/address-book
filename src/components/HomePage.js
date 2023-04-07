import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [formDataArray, setFormDataArray] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  useEffect(() => {
    const storedFormDataArray = localStorage.getItem("formDataArray");
    if (storedFormDataArray) {
      setFormDataArray(JSON.parse(storedFormDataArray));
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDataArray((prevFormDataArray) => [...prevFormDataArray, formData]);
    localStorage.setItem(
      "formDataArray",
      JSON.stringify([...formDataArray, formData])
    );
  };
  return (
    <section>
      <div className="container bg bg-secondary">
        <div className="row">
          <h3>Create Contact</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="mb-3"
                placeholder="Enter Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter Your Mobile Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button type="submit">Create Contact</button>
              <button>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
