function registrar(senha, email){
    console.log(`Ola! voce se registrou com email $(email)`)
    const usuario={
        email: email,
        senha: senha
    }
    usuarios.push(usuario)
}
