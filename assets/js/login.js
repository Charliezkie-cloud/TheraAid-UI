(() => {
    const forms = document.getElementsByClassName("needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener("submit", async (e) => {

            e.preventDefault();
            e.stopPropagation();

            form.classList.add("was-validated");

            const username = form.username.value;
            const password = form.password.value;

            if (form.checkValidity()) {
                
            }
        });
    });
})();