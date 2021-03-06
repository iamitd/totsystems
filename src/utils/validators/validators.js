export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}
export const notEmpty = value => {
    if (value) return undefined;
    return "u can't send empty message";
}