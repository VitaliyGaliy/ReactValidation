const checkUser = (user, logins, saveUserInLS, password, login) => {
  const loginCheck = logins.filter((l) => l.user == user)
  if(!loginCheck.length > 0){
    saveUserInLS({user, password})
      login(user)
    }

  if(loginCheck.length > 0){
    if(password === loginCheck[0].password){
      login(user)
    }
  }
}

export default checkUser
