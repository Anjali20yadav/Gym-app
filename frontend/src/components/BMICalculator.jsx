import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      const msg = "You are underweight. Consider seeking advice from a healthcare provider.";
      toast.warning(msg);
      setMessage(msg);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      const msg = "You have normal weight. Keep maintaining a healthy lifestyle.";
      toast.success(msg);
      setMessage(msg);
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      const msg = "You are overweight. Consider seeking advice from a healthcare provider.";
      toast.warning(msg);
      setMessage(msg);
    } else {
      const msg = "Dangerous.";
      toast.error(msg);
      setMessage(msg);
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>

          {/* Result Display */}
          {bmi && (
            <div style={{ marginTop: "20px" }}>
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
          )}
        </div>

        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
           {bmi && (
    <h3 style={{ marginTop: "20px" }}>
    Your BMI is: <span>{bmi}</span>
    </h3>
  )}
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
