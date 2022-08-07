

export const authenticated = (user: any, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    console.log("user", user)
    next();
}
export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.getItem('user') as string)
}
export const removeAuthencicate = () => {
    if (!localStorage.getItem('user')) return;
    return JSON.parse(localStorage.removeItem('user') as any)

}
export const removeCart = () => {
    if (!localStorage.getItem('cartItems')) return;
    return JSON.parse(localStorage.removeItem('cartItems') as any)

}