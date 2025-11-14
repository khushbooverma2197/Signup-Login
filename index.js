function signup(userName) {
    const users = ['Khushboo', 'Puneet', 'Anurag'];

    const candidate = String(userName).trim();
    if (users.includes(candidate)) {
        return 'User Already Registered, Please Login';
    }

    users.push(candidate);
    return 'Signup Sucessfull, Please Login';
}

function login(userName, password) {
    const users = ['Khushboo', 'Puneet', 'Anurag'];

    if (users.includes(userName)) {
        if (password === 'Emp@123') {
            return 'Login Sucessfull...';
        } else {
            return 'Wrong Password....';
        }
    } else {
        return 'User Not Found, Please Signup';
    }
}

// Example:
// console.log(signup('Khushboo'));      // User Already Registered, Please Login
// console.log(signup('Ritik'));    // Signup Sucessfull, Please Login
