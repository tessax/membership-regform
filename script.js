document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("membership-form");

    form.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Log the data to the console
        console.log("Form Submitted:", data);

        // Optionally, you could display a success message or clear the form here
        alert("Thank you for registering!");
        form.reset();
    });
});
