/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                'myCreation': '8px 8px 8px rgb(76 76 76)',
            }
        },
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