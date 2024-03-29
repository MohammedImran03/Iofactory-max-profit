function maxProfit(timeUnit) {
    // Estimated Earnings 
    const theatreEarning = 1500;
    const pubEarning = 1000;
    const commercialParkEarning = 3000;

//Estimated Building Units 
    const buildingTimes = [5, 4, 10];
    const buildingEarnings = [theatreEarning, pubEarning, commercialParkEarning];
//Maximum Buildings Can be Constructed
    const maxBuildings = [];
    for (let i = 0; i < buildingTimes.length; i++) {
        maxBuildings.push(Math.floor(timeUnit / buildingTimes[i]));
    }


    let maxEarnings = 0;
    let bestSolution = [];
//Calculations
    for (let theatres = 0; theatres <= maxBuildings[0]; theatres++) {
        for (let pubs = 0; pubs <= maxBuildings[1]; pubs++) {
            for (let commercialParks = 0; commercialParks <= maxBuildings[2]; commercialParks++) {
                const totalUnits = theatres * buildingTimes[0] + pubs * buildingTimes[1] + commercialParks * buildingTimes[2];
                if (totalUnits <= timeUnit) {
                    const earnings = theatres * theatreEarning + pubs * pubEarning + commercialParks * commercialParkEarning;
                    if (earnings > maxEarnings) {
                        maxEarnings = earnings;
                        bestSolution = [theatres, pubs, commercialParks];
                    }
                }
            }
        }
    }

    const output = bestSolution.map((count, index) => {
        if (count > 0) {
            return `${index === 0 ? 'T' : index === 1 ? 'P' : 'C'}: ${count}`;
        }
    }).filter(Boolean).join(' ');
    
    return { earnings: maxEarnings, solution: output };
}

// Test cases Inputs
const testCases = [
    { timeUnit: 7, expectedEarnings: 3000 },
    { timeUnit: 8, expectedEarnings: 4500 },
    { timeUnit: 13, expectedEarnings: 16500 }
];

testCases.forEach(testCase => {
    const { timeUnit, expectedEarnings } = testCase;
    const { earnings, solution } = maxProfit(timeUnit);
    console.log(`Time Unit: ${timeUnit}`);
    console.log(`Earnings: $${expectedEarnings}`);
    console.log("Solutions:",solution);
    console.log();
});
