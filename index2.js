const prop = {
    form: 'square',
    color: 'red',
    size: 'big'
  }
  var fun = function (object, str) {
    console.log(str in object);
  }
  fun(prop, 'color');
  