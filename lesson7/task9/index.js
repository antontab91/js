let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
    let currentIndex = clients.indexOf(client);
    const difference = balances[currentIndex] - amount;
    if (difference < 0) {
        return -1
    }
    balances[currentIndex] = difference;
    return balances[currentIndex];
}