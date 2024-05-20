function makeSalesArray() {
  let sales = [
    {
      name: 'Gabriel',
      value: 5.90
    },
    {
      name: 'Gabriel',
      value: 5.90
    },
    {
      name: 'Gabriel',
      value: 10.90
    },
    {
      name: 'Gabriel',
      value: 3.90
    },
    {
      name: 'Matheus',
      value: 5.90
    },
    {
      name: 'Matheus',
      value: 5.90
    },
    {
      name: 'João',
      value: 1.25
    },
    {
      name: 'Kendrick',
      value: 25
    }
  ];

  sumSales(sales);
}

function sumSales(arr) {
  let resultObj = {};

  arr.forEach(element => {
    if (resultObj[element.name]) {
      resultObj[element.name] += element.value;
    } else {
      resultObj[element.name] = element.value;
    }
  });

  console.log(resultObj);
}

makeSalesArray();
