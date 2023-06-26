

function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (
        password.length < 8 || 
        !password.match(/[a-z]/) || 
        !password.match(/[A-Z]/) || 
        !password.match(/[0-9]/) ||
        !password.match(/[^a-zA-Z0-9\s]/) 
    ) {
        const err = new Error('Senha inválida.')
        err.input = 'password'
        throw err
    }else if(password != userInputs.passwordRepeat.value){
      const err = new Error('As senhas não são iguais')
      userInputs.passwordRepeat.classList.add('error')
      err.input = 'password'
      throw err
      
    }
}

function resetFormStyles() {
  userInputs.name.classList.remove('success')
  userInputs.email.classList.remove('success')
  userInputs.password.classList.remove('success')
  userInputs.passwordRepeat.classList.remove('error')
  userInputs.name.classList.remove('error')
  userInputs.email.classList.remove('error')
  userInputs.password.classList.remove('error')
  userInputs.passwordRepeat.classList.remove('error')
  
  }

const userInputs = {}

userInputs.name = document.querySelector('#name')
userInputs.email = document.querySelector('#email')
userInputs.password = document.querySelector('#password')
userInputs.passwordRepeat = document.querySelector('#passwordRepeat')

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()
    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
        userInputs.passwordRepeat.classList.add('success')
        document.querySelector('#password-error').textContent = ''
        
        alert("Usuário Registrado com sucessso!")
    } catch (err) {
       
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})