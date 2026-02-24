import { useState } from "react";

function StudentForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
    skills: []
  });

  const [darkMode, setDarkMode] = useState(false);

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // checkbox skills
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter(skill => skill !== value)
      });
    }
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    if (formData.dob > today) {
      alert("Future date is not allowed!");
      return;
    }

    const message = `
----- Student Details -----

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}
Address: ${formData.address}
State: ${formData.state}
Skills: ${formData.skills.length ? formData.skills.join(", ") : "None"}

---------------------------
`;

    alert(message);
  };

  // cancel
  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
      skills: []
    });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <header className="header">
        <h3>Welcome to CU</h3>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="form-box">
        <h2>Student Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <label>First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            max={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
            required
          />

          <label>Gender</label>
          <div className="radio">
            {["Male","Female","Other"].map(g => (
              <label key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />
                {g}
              </label>
            ))}
          </div>

          <label>Address</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />

          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="">Select</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Maharashtra</option>
          </select>

          <label>Skills</label>
          <div className="skills">
            {["Java","Python","AI","ML","DevOps","Cyber Security","C++","Cloud"].map(skill => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
          </div>

          <div className="buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default StudentForm;