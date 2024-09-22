(() => {
    const forms = document.getElementsByClassName("needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener("submit", async (e) => {
            const passwordConfirmationFeedback = document.getElementById("password-confirmation-feedback");

            e.preventDefault();
            e.stopPropagation();

            form.classList.add("was-validated");

            const username = form.username.value;
            const password = form.password.value;
            const passwordConfirmation = form.passwordConfirmation.value;
            const email = form.email.value;
            const mobileNumber = form.mobileNumber.value;
            const licenseNumber = form.licenseNumber.value;
            const licenseImage = form.licenseImage.files[0];

            if (password === passwordConfirmation) {
                passwordConfirmationFeedback.classList.replace("d-block", "d-none");
            } else {
                passwordConfirmationFeedback.classList.replace("d-none", "d-block");
            }

            if (form.checkValidity() && password === passwordConfirmation) {
                const modal = new bootstrap.Modal("#modal");

                modal.show();
            }
        });
    });

    const viewPasswordButton = document.getElementsByClassName("viewPasswordButton");

    Array.from(viewPasswordButton).forEach((button) => {
        button.addEventListener("click", () => {
            const input = button.parentElement.getElementsByTagName("input")[0];

            if (input.type === "password") {
                input.type = "text";
                button.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
            } else { 
                input.type = "password";
                button.innerHTML = `<i class="bi bi-eye-fill"></i>`;
            }
        });
    });

    const licenseImage = document.getElementById("licenseImage");
    const licensePreview = document.getElementById("licensePreview");

    licenseImage.addEventListener("change", () => {
        const file = licenseImage.files[0];

        if (file) {
            licensePreview.parentElement.classList.replace("d-none", "d-block");
            licensePreview.src = URL.createObjectURL(file);
        } else {
            licensePreview.parentElement.classList.replace("d-block", "d-none");
            licensePreview.src = "#"
        }
    });

})();