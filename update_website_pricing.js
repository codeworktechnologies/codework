const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'pricing.json');
const rawData = fs.readFileSync(filePath, 'utf8');
const pricing = JSON.parse(rawData);

pricing.forEach((plan) => {
  if (plan.id === 'web-1') {
    // Keep existing features or update? The user didn't specify new features for web-1.
    // We add skills and extra
    plan.skills = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'];
    plan.extraCharges = [
      { name: 'Domain', value: '₹1,000 / year' },
      { name: 'Hosting', value: '₹999 / year' }
    ];
  } else if (plan.id === 'web-2') {
    plan.features = [
      { text: 'Services / Products / Product details', included: true },
      { text: 'UI Improvement with Animation', included: true },
      { text: 'WhatsApp button', included: true }
    ];
    plan.skills = ['React.js', 'Angular', 'Next.js', 'Animation'];
    plan.extraCharges = [
      { name: 'Domain', value: '₹1,000 / year' },
      { name: 'Hosting', value: '₹2,999 / year' }
    ];
  } else if (plan.id === 'web-3') {
    plan.name = 'Premium custom website';
    plan.features = [
      { text: 'Services / Product / Products details', included: true },
      { text: 'Custom pages based on requirements', included: true },
      { text: 'Online ordering system', included: true },
      { text: 'Payment gateway systems', included: true },
      { text: 'Auth systems', included: true }
    ];
    plan.skills = ['React.js', 'Node.js', 'Angular', 'Next.js', 'Flask', 'Django', 'API Integration', 'Advanced Animations'];
    plan.extraCharges = [
      { name: 'Domain', value: '₹1,000 / year' },
      { name: 'Hosting', value: '₹8,499 / year' }
    ];
  }
});

fs.writeFileSync(filePath, JSON.stringify(pricing, null, 2));
console.log('Successfully updated pricing.json with skills and extra charges for web plans.');
