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
    return balances[currentIndex] || -1;
}

withdraw(clients, balances, 'John', 95);
console.log(balances);