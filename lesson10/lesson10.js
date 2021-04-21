console.log('hello world')

function user() {
    let _age = 20;
    let _name = 'John';
    let _password = 88665544;
    let _address = 'Independence square';
    let _car = true;

    function getAge() {
        return _age
    }

    function getName() {
        return _name
    }
    function getPassword(){
        return _password
    }

    function getAddress() {
        return _address
    }

    function getCar() {
        return _car
    }

    function setAge(newAge) {
        if (newAge < _age) {
            alert('you are not Benjamin Button')
            return
        }
        _age = newAge
    }

    function setPassword() {
        let n = prompt('введіть імя:')
        let p = +prompt('введіть попередній пароль:')
        if (p === 88665544 && n === 'John') {
            let newPassword = prompt('введіть новий пароль')
            if (newPassword.length<8){
                console.log('замалий пароль')
            }else (_password = newPassword)

        }else {console.log('you are not allowed to change password')}
    }

    function setAddress(newAddress) {
        _address = newAddress
    }

    function setCar() {
        if (_car === true) {
            _car = false
        } else (_car = true)
    }

    return {getAge, getName, getAddress, getCar, getPassword, setAge, setPassword, setAddress, setCar}
}

let myUser = user();
myUser.getAddress();
myUser.getAge();
myUser.getCar();
myUser.getName();
myUser.setAge(22);
myUser.setCar();
myUser.setAddress('glory street');
myUser.setPassword();
console.log(myUser.getAge());
console.log(myUser.getCar());
console.log(myUser.getAddress())
console.log(myUser.getPassword())
myUser.setPassword()
console.log(myUser.getPassword())
