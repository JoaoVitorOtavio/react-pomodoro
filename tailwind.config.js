/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        backgroundColor: (theme) => ({
            primary: "#3b4252",
        }),
        textColor: {
            primary: "#ebcb8b",
            secondary: "#d8dee9",
            sessionNumber: "#88c0d0",
        },
    },
    plugins: [],
}