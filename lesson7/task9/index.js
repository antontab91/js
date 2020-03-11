let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {    //  функция принимает массив клиентов , массив счетов , идентификатор клиента и сумму которую должен я отнять 
    let currentIndex = clients.indexOf(client);             // обьявляю переменную Индекс которая равна индексу клиента 
    const difference = balances[currentIndex] - amount;         // обьявляю переменную Диференс куда записываю разницу счета клиента с суммой, которую нужно отнять
    if (difference < 0) {                                       // проверка если сумма снятия меньше чем есть на счете - ретурн -1
        return -1
    }
    balances[currentIndex] = difference;                        // записываю в нужный элемент массива разницу 
    return balances[currentIndex];                              // возвращаю измененный элемент массива
}