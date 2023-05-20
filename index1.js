const prot = {
    d: 400
}
const abc = Object.create(prot);

abc.a = 100;
abc.b = 200;
abc.c = 300;

var fun = function (object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log([key, abc[key]]);
// задание противоречивое. В одном предложении требуется вывести свойства и значения, в следюущем сказано, 
//что значения возвращать нельзя. Для воторого случая будет верно такое решение - console.log(key);
        }
    }
}

fun(abc);
