import React, { useState } from 'react';

function GpaCalculator() {
  const [currentSemesterCreditHours, setCurrentSemesterCreditHours] = useState('');
  const [currentSemesterGPA, setCurrentSemesterGPA] = useState('');
  const [previousSemesterCGPA, setPreviousSemesterCGPA] = useState('');
  const [totalEarnedCredits, setTotalEarnedCredits] = useState('');
  const [calculatedCGPA, setCalculatedCGPA] = useState(0);

  const calculateCGPA = () => {
    // Calculate the CGPA based on the provided data
    // Update the 'calculatedCGPA' state with the calculated value
    // Add your calculation logic here

    // For now, let's assume a simple calculation
    const currentCredits = parseFloat(currentSemesterCreditHours);
    const currentGpa = parseFloat(currentSemesterGPA);
    const previousCgpa = parseFloat(previousSemesterCGPA);
    const totalCredits = parseFloat(totalEarnedCredits);

    if (!isNaN(currentCredits) && !isNaN(currentGpa) && !isNaN(previousCgpa) && !isNaN(totalCredits)) {
      const calculatedCgpa = ((previousCgpa * totalCredits) + (currentGpa * currentCredits)) / (totalCredits + currentCredits);
      setCalculatedCGPA(calculatedCgpa.toFixed(2));
    }
  };

  return (
    <div className="relative overflow-hidden bg-hero-image bg-cover bg-no-repeat p-12 text-center" style={{ height: 'calc(100vh - 60px)' }}>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={overlayStyle}>
        <div className="h-screen flex flex-col items-center justify-center p-6">
          <h2 className="text-4xl font-semibold mb-4 text-white">CGPA Calculator</h2>
          <div className="w-1/2 flex flex-col space-y-4 p-4 mb-4">
            <input
              type="number"
              placeholder="Current Semester Credit Hours"
              className="px-3 w-full py-2 border rounded"
              value={currentSemesterCreditHours}
              onChange={(e) => setCurrentSemesterCreditHours(e.target.value)}
            />
            <input
              type="number"
              placeholder="Current Semester GPA"
              className="px-3 w-full py-2 border rounded"
              value={currentSemesterGPA}
              onChange={(e) => setCurrentSemesterGPA(e.target.value)}
            />
            <input
              type="number"
              placeholder="Previous Semester CGPA"
              className="px-3 w-full py-2 border rounded"
              value={previousSemesterCGPA}
              onChange={(e) => setPreviousSemesterCGPA(e.target.value)}
            />
            <input
              type="number"
              placeholder="Total Earned Credits"
              className="px-3 w-full py-2 border rounded"
              value={totalEarnedCredits}
              onChange={(e) => setTotalEarnedCredits(e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={calculateCGPA}
          >
            Calculate CGPA
          </button>
          <div className="mt-4 font-bold font-2xl text-white">
            {calculatedCGPA > 0 && <p>Your Calculated CGPA: {calculatedCGPA}</p>}
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
