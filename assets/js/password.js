function ingresar(){
    one = document.getElementById('cmb-select-one')
    two = document.getElementById('cmb-select-two')
    three = document.getElementById('cmb-select-three')
    result = document.getElementById('txt-result')
    password1 = document.getElementById('txt-password1')
    password2 = document.getElementById('txt-password2')
    password3 = document.getElementById('txt-password3')

    numberone = numero(one.value)*100
    numbertwo = numero(two.value)*10
    numberthree = numero(three.value)
    total = numberone + numbertwo + numberthree

    console.log('numberone: ', numberone)
    console.log('numbertwo: ', numbertwo)
    console.log('numberthree: ', numberthree)
    console.log('total: ', total)

    if(total === 999){
        password1.innerHTML = "password 1 correcto"
        password2.innerHTML = ""
        password3.innerHTML = ""
    }else if(total === 714){
        password1.innerHTML = ""
        password2.innerHTML = "password 2 correcto"
        password3.innerHTML = ""
    }else{
        password1.innerHTML = ""
        password2.innerHTML = ""
        password3.innerHTML = "password incorrecto"
    }

}

function numero(value) {
    try {
        num = parseInt(value)
        if (isNaN(num)) {
            return 0
        } else {
            return num
        }
    } catch (error) {
        return 0
    }
}