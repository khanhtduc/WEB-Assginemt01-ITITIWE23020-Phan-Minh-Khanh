document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const progressBar = document.getElementById('form-progress');
    const urgencyRange = document.getElementById('urgency');
    const urgencyMeter = document.getElementById('uMeter');

    // 1. Logic for Progress Bar
    if (contactForm && progressBar) {
        contactForm.addEventListener('input', () => {
            const requiredFields = contactForm.querySelectorAll('[required]');
            let completed = 0;
            
            requiredFields.forEach(field => {
                if (field.type === 'checkbox') {
                    if (field.checked) completed++;
                } else {
                    if (field.value.trim() !== '') completed++;
                }
            });

            const percentage = (completed / requiredFields.length) * 100;
            progressBar.value = percentage;
        });
    }

    // 2. Link Range Slider to Meter
    if (urgencyRange && urgencyMeter) {
        urgencyRange.addEventListener('input', () => {
            urgencyMeter.value = urgencyRange.value;
        });
    }

    // 3. Simple Submit Feedback
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback! Submission successful.');
        contactForm.reset();
        progressBar.value = 0;
        urgencyMeter.value = 50;
    });
});