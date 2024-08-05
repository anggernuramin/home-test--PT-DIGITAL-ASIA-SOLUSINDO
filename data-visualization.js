const data_group = [{ branch: "Surabaya" }, { branch: "Jakarta" }];

const data_x = [
  { branch: "Surabaya", posting_date: "2024-01-01", visitors: 100 },
  { branch: "Surabaya", posting_date: "2024-01-02", visitors: 80 },
  { branch: "Surabaya", posting_date: "2024-01-03", visitors: 25 },
  { branch: "Surabaya", posting_date: "2024-01-04", visitors: 36 },
  { branch: "Surabaya", posting_date: "2024-01-05", visitors: 48 },
  { branch: "Surabaya", posting_date: "2024-01-06", visitors: 24 },
  { branch: "Surabaya", posting_date: "2024-01-07", visitors: 35 },
  { branch: "Jakarta", posting_date: "2024-01-01", visitors: 200 },
  { branch: "Jakarta", posting_date: "2024-01-02", visitors: 235 },
  { branch: "Jakarta", posting_date: "2024-01-03", visitors: 125 },
  { branch: "Jakarta", posting_date: "2024-01-04", visitors: 115 },
  { branch: "Jakarta", posting_date: "2024-01-05", visitors: 168 },
  { branch: "Jakarta", posting_date: "2024-01-06", visitors: 56 },
  { branch: "Jakarta", posting_date: "2024-01-07", visitors: 300 },
];

const data_y = [
  { branch: "Surabaya", posting_date: "2024-01-01", total_transactions: 35 },
  { branch: "Surabaya", posting_date: "2024-01-02", total_transactions: 24 },
  { branch: "Surabaya", posting_date: "2024-01-03", total_transactions: 8 },
  { branch: "Surabaya", posting_date: "2024-01-04", total_transactions: 19 },
  { branch: "Surabaya", posting_date: "2024-01-06", total_transactions: 9 },
  { branch: "Surabaya", posting_date: "2024-01-07", total_transactions: 12 },
  { branch: "Jakarta", posting_date: "2024-01-01", total_transactions: 135 },
  { branch: "Jakarta", posting_date: "2024-01-02", total_transactions: 124 },
  { branch: "Jakarta", posting_date: "2024-01-04", total_transactions: 18 },
  { branch: "Jakarta", posting_date: "2024-01-05", total_transactions: 79 },
  { branch: "Jakarta", posting_date: "2024-01-06", total_transactions: 19 },
  { branch: "Jakarta", posting_date: "2024-01-07", total_transactions: 112 },
];

function processDataVisualization(data_group, data_x, data_y) {
  const result = [];

  data_group.forEach((group) => {
    const branch = group.branch;
    const branchDataX = data_x.filter((item) => item.branch === branch);
    const branchDataY = data_y.filter((item) => item.branch === branch);

    const branchResult = { branch };

    branchDataX.forEach((data) => {
      const date = data.posting_date;
      const visitors = data.visitors;
      const transactionsData = branchDataY.find(
        (item) => item.posting_date === date
      );
      const transactions = transactionsData
        ? transactionsData.total_transactions
        : 0;
      const ratio = visitors ? (transactions / visitors).toFixed(2) : 0;
      branchResult[date] = parseFloat(ratio);
    });

    result.push(branchResult);
  });

  return result;
}

console.log(
  JSON.stringify(processDataVisualization(data_group, data_x, data_y), null, 2)
);
