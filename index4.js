function Device(name, power) {
    this.name = name,
    this.power = power
}
//Функция включения прибора

Device.prototype.switchOnDevice = function (on) {
if (on === "off") {this.power = 0;} 
console.log(`Power of the ${this.name} is ${this.power} W`)
}

// прибор компьютер
const comp = new Device('HP', 650);
comp.monitor = 'wide';
comp.memory = 'hdd';
comp.getMessage = function() {
    console.log(`My name is ${this.name}`)
}
// прибор утюг
const iron = new Device('Tefal', 1000)
iron.prop = 'steam';
iron.voltage = '220v';
iron.getMessage = function() {
    console.log(`I am ${this.name}`)
}


    
//Включаем или выключаем прибор, меняя "on" на "off"

comp.getMessage()
comp.switchOnDevice("on")
iron.getMessage()
iron.switchOnDevice("on")
