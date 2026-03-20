const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'pricing.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const pricing = JSON.parse(rawData);

pricing.forEach((plan) => {
  // Determine how many features are included based on the plan ID.
  let includedCount = 5; // Default all included
  
  if (plan.id === 'web-1' || plan.id === 'maint-1' || plan.id === 'app-1' || plan.id === 'app-maint-1') {
    includedCount = 3;
  } else if (plan.id === 'web-2' || plan.id === 'app-2' || plan.id === 'app-maint-2') {
    includedCount = 4;
  } else if (plan.id === 'maint-2' || plan.id === 'maint-3' || plan.id === 'web-3' || plan.id === 'app-3' || plan.id === 'app-maint-3') {
    includedCount = 5;
  }

  // Convert array of strings to array of objects
  if (plan.features.length > 0 && typeof plan.features[0] === 'string') {
    plan.features = plan.features.map((feature, idx) => {
      return {
        text: feature,
        included: idx < includedCount
      };
    });
  }
});

fs.writeFileSync(filePath, JSON.stringify(pricing, null, 2));
console.log('Successfully updated pricing.json to use object features.');
