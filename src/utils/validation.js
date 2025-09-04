
const validation = (email , password) => {
  
        const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

        if(!emailValid) return "Email ID is not valid";
        if(!passwordValid) return "Incorrect password ";

        return null;

}

export default validation
