let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
    let currentIndex;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            if (balances[i] - amount >= 0) {
                balances[i] = balances[i] - amount;
                currentIndex = i;
            }
        }
    }
    r
}

withdraw(clients, balances, 'John', 95);
console.log(balances);


// обьявляю функцию , которая принимает 4 аргумента ( массив клиентов , массив балансов , идентификатор клиента , баланс на который нужно отнять )
// внутри функции обьявляюем перенную , которой буду присваивать текущую итерацию 
// прохожусь циклом по длинне масивов
// если єлемент массива клиентов на текущей итерации рапвен идентификатьору клиента и если разница между текущим єлементом массива с числом которое нужно отнять больше или равно  0
// тогда текущая итерация масива балансов равна ее разнице с числом которое нужно отнять 