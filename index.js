function signup(userName) {
    const users = ['Khushboo', 'Puneet', 'Anurag'];

    const candidate = String(userName).trim();
    if (users.includes(candidate)) {
        return 'User Already Registered, Please Login';
    }

    users.push(candidate);
    return 'Signup Sucessfull, Please Login';
}

// Example:
// console.log(signup('Khushboo'));      // User Already Registered, Please Login
// console.log(signup('Ritik'));    // Signup Sucessfull, Please Login