 function validateForm() {
            let isValid = true;

            // Name validation
            const name = document.getElementById("fName").value.trim();
            const nameError = document.getElementById("nameError");
            if (name.length < 5) {
                nameError.style.display = "block";
                isValid = false;
            } else {
                nameError.style.display = "none";
            }

            // Email validation
            const email = document.getElementById("email").value.trim();
            const emailError = document.getElementById("emailError");
            if (!email.includes("@")) {
                emailError.style.display = "block";
                isValid = false;
            } else {
                emailError.style.display = "none";
            }

            // Phone number validation
            const phone = document.getElementById("phone").value.trim();
            const phoneError = document.getElementById("phoneError");
            if (phone.length !== 10 || phone === "123456789") {
                phoneError.style.display = "block";
                isValid = false;
            } else {
                phoneError.style.display = "none";
            }

            // Password validation
            const password = document.getElementById("password").value.trim();
            const passwordError = document.getElementById("passwordError");
            if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
                passwordError.style.display = "block";
                isValid = false;
            } else {
                passwordError.style.display = "none";
            }

            // Confirm password validation
            const confirmPassword = document.getElementById("confirmPassword").value.trim();
            const confirmPasswordError = document.getElementById("confirmPasswordError");
            if (confirmPassword !== password) {
                confirmPasswordError.style.display = "block";
                isValid = false;
            } else {
                confirmPasswordError.style.display = "none";
            }

            return isValid;
        }