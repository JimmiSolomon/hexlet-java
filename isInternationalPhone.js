//Функция которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат

const isInternationalPhone = (numberPhone) => numberPhone[0] === '+';