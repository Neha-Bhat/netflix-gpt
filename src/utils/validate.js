export const checkValidData = (isSignIn, email, password, username='') => {
    let isUsernameValid;
    if(!isSignIn) {
        isUsernameValid = /^[A-Za-z][A-Za-z0-9_]{2,19}$/.test(username)
    }
    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(password)
    if(!isSignIn && !isUsernameValid) return 'Invalid Username'
    if(!isEmailValid) return 'Invalid Email'
    if(!isPasswordValid) return 'Invalid Password'
    return null
}