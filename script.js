document.getElementById('dietForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const disease = document.getElementById('disease').value.toLowerCase();
    let result = '';

    // Simple example logic for demonstration
    if (disease.includes('diabetes')) {
        result = `
            <h2>Diet Plan for Diabetes</h2>
            <ul>
                <li>Include high-fiber foods like vegetables, fruits, and whole grains.</li>
                <li>Avoid sugary foods and drinks.</li>
                <li>Choose lean proteins like fish, chicken, and legumes.</li>
                <li>Monitor carbohydrate intake and choose complex carbs.</li>
            </ul>
        `;
    } else if (disease.includes('hypertension')) {
        result = `
            <h2>Diet Plan for Hypertension</h2>
            <ul>
                <li>Reduce salt intake.</li>
                <li>Eat plenty of fruits and vegetables.</li>
                <li>Choose low-fat dairy products.</li>
                <li>Avoid processed and fatty foods.</li>
            </ul>
        `;
    } else {
        result = 'No matching diet plan found.';
    }

    document.getElementById('result').innerHTML = result;
});
