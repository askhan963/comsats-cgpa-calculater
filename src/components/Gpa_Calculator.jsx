import React, { useState } from 'react';

function GpaCalculator() {
  const [subjects, setSubjects] = useState([]);
  const [creditHours, setCreditHours] = useState([]);
  const [grades, setGrades] = useState([]);
  const [gpa, setGpa] = useState(0);

  const addSubject = () => {
    setSubjects([...subjects, '']);
    setCreditHours([...creditHours, '']);
    setGrades([...grades, '']);
  };

  const calculateGpa = () => {
    // Calculate GPA logic based on creditHours and grades
    // Update the 'gpa' state with the calculated value
    // For simplicity, let's assume the calculation is done here
    let totalCreditPoints = 0;
    let totalCreditHours = 0;

    for (let i = 0; i < subjects.length; i++) {
      const credit = parseFloat(creditHours[i]);
      const grade = parseFloat(grades[i]);

      if (!isNaN(credit) && !isNaN(grade)) {
        totalCreditPoints += credit * grade;
        totalCreditHours += credit;
      }
    }

    if (totalCreditHours > 0) {
      const calculatedGpa = totalCreditPoints / totalCreditHours;
      setGpa(calculatedGpa.toFixed(2));
    }
  };

  return (
    <div className="relative overflow-hidden bg-hero-image bg-cover bg-no-repeat p-12 text-center" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={overlayStyle}>
        <div className="h-screen flex flex-col items-center justify-center p-6">
          <h2 className="text-3xl font-semibold mb-4 text-white">GPA Calculator</h2>
          <div className="mb-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:scale-105 duration-150"
              onClick={addSubject}
            >
              Add Subject
            </button>
          </div>
          {subjects.map((subject, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="px-3 py-2 border rounded"
                value={subject}
                onChange={(e) => {
                  const updatedSubjects = [...subjects];
                  updatedSubjects[index] = e.target.value;
                  setSubjects(updatedSubjects);
                }}
              />
              <input
                type="number"
                placeholder="Credit Hours"
                className="px-3 py-2 border rounded ml-4"
                value={creditHours[index]}
                onChange={(e) => {
                  const updatedCreditHours = [...creditHours];
                  updatedCreditHours[index] = e.target.value;
                  setCreditHours(updatedCreditHours);
                }}
              />
              <input
                type="number"
                placeholder="Grade"
                className="px-3 py-2 border rounded ml-4"
                value={grades[index]}
                onChange={(e) => {
                  const updatedGrades = [...grades];
                  updatedGrades[index] = e.target.value;
                  setGrades(updatedGrades);
                }}
              />
            </div>
          ))}
          <button
            className=" bg-blue-700 text-white px-4 py-2 rounded hover:scale-105 duration-150"
            onClick={calculateGpa}
          >
            Calculate GPA
          </button>
          <div className="mt-4 font-bold font-2xl text-white">
            {gpa > 0 && <p>Your GPA: {gpa}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
};

export default GpaCalculator;
