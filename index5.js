class Device {
  constructor(name, power) {
    this.name = name;
    this.power = power;
  }
}
class Child extends Device {
  constructor(name, power, on) {
    super(name, power);

    this.switchOnDevice = function (on) {
      if (on === "off") {
        this.power = 0;
      }
      console.log(`Power of the ${this.name} is ${this.power} W`)
    }
  }
}

// прибор компьютер
const comp = new Child('HP', 650);
comp.monitor = 'wide';
comp.memory = 'hdd';
comp.getMessage = function () {
  console.log(`This is ${this.name}`)
}
// прибор утюг
const iron = new Child('Tefal', 1000)
iron.prop = 'steam';
iron.voltage = '220v';
iron.getMessage = function () {
  console.log(`This is ${this.name}`)
}

//Включаем или выключаем прибор, меняя "on" на "off"

comp.getMessage()
comp.switchOnDevice("on")
iron.getMessage()
iron.switchOnDevice("on")