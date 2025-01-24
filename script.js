function showPlan(plan) {
    // Toggle buttons
    document.querySelectorAll('.toggle-btn').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.toggle-btn[onclick="showPlan('${plan}')"]`).classList.add('active');

    // Toggle plans
    document.querySelectorAll('.pricing-plan').forEach(planDiv => {
        planDiv.classList.add('d-none');
    });
    document.getElementById(plan).classList.remove('d-none');
}



function switchPlan(planType) {
    // Hide all cards
    document.querySelectorAll('.plan-card').forEach(card => {
        card.style.display = 'none';
    });

    // Show selected plan's cards
    if (planType === 'monthly') {
        document.querySelectorAll('.monthly-card').forEach(card => {
            card.style.display = 'block';
        });
    } else if (planType === 'yearly') {
        document.querySelectorAll('.yearly-card').forEach(card => {
            card.style.display = 'block';
        });
    }
}

// Initialize with monthly cards visible
document.addEventListener('DOMContentLoaded', function () {
    switchPlan('monthly');
});