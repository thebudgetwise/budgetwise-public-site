document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
  });

  document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
  
    // Get user inputs
    const familySize = parseInt(document.getElementById('family-size').value);
    const monthlyIncome = parseInt(document.getElementById('monthly-income').value);
  
    // Simple budget proposal logic (percentages can be adjusted as needed)
    const housing = monthlyIncome * 0.25;
    const groceries = familySize * 150; // Assuming $150 per person for groceries
    const transportation = monthlyIncome * 0.07;
    const healthInsurance = familySize * 100; // Assuming $100 per person
    const childcare = (familySize > 2) ? 300 : 0; // Assuming childcare for families with children
    const savingsDebt = monthlyIncome * 0.20;
  
    // Display the calculated budget
    const budgetBreakdown = `
      <li><strong>Housing:</strong> $${housing.toFixed(2)} per month</li>
      <li><strong>Groceries:</strong> $${groceries.toFixed(2)} per month</li>
      <li><strong>Transportation:</strong> $${transportation.toFixed(2)} per month</li>
      <li><strong>Health Insurance:</strong> $${healthInsurance.toFixed(2)} per month</li>
      <li><strong>Childcare:</strong> $${childcare.toFixed(2)} per month</li>
      <li><strong>Savings & Debt:</strong> $${savingsDebt.toFixed(2)} per month</li>
    `;
  
    // Show the budget breakdown
    document.getElementById('budget-breakdown').innerHTML = budgetBreakdown;
    document.getElementById('budget-result').style.display = 'block';
  });
  
  