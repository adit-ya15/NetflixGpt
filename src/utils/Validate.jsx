export const validate = (email, password) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhone = /^[0-9]{10}$/.test(email); // Netflix allows phone too
    const isPassword = password.length >= 4 && password.length <= 60;

    if (!email) return "Please enter a valid email or phone number.";
    if (!isEmail && !isPhone) return "Please enter a valid email.";

    if (!isPassword) return "Your password must contain between 4 and 60 characters.";

    return null;
};