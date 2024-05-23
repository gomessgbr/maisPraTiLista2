function transformTransactions(transactions){
  let result = {};

    transactions.forEach(transaction => {
        let category = transaction.categoria;
        if (!result[category]) {
            result[category] = {
                transactions: [],
                subtotal: 0
            };
        }
        result[category].transactions.push(transaction['valor']);
        result[category].subtotal += transaction.valor;
    });

    return result;
}

let transactions = [
  {
    id: 1,
    valor: 100.50,
    data: '01-05-2024',
    categoria: 'Alimentação'
  },
  {
    id: 2,
    valor: 200.00,
    data: '02-08-2023',
    categoria: 'Transporte'
  },
  {
    id: 3,
    valor: 1500.75,
    data: '01-12-2023',
    categoria: 'Aluguel'
  },
  {
    id: 4,
    valor: 50.25,
    data: '22-04-2022',
    categoria: 'Lazer'
  },
  {
    id: 5,
    valor: 300.00,
    data: '15-11-2021',
    categoria: 'Educação'
  },
  {
    id: 6,
    valor: 100.50,
    data: '06-05-2024',
    categoria: 'Alimentação'
  },
  {
    id: 7,
    valor: 50.5,
    data: '06-08-2020',
    categoria: 'Alimentação'
  },
  {
    id: 8,
    valor: 1050,
    data: '22-04-2022',
    categoria: 'Lazer'
  },
]

console.log(transformTransactions(transactions));