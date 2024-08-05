const data_group = [
  { branch: "Surabaya", posting_date: "2024-01-01" },
  { branch: "Surabaya", posting_date: "2024-01-02" },
  { branch: "Surabaya", posting_date: "2024-01-03" },
  { branch: "Jakarta", posting_date: "2024-01-01" },
  { branch: "Jakarta", posting_date: "2024-01-03" },
];

const data_raw = [
  {
    branch: "Surabaya",
    posting_date: "2024-01-01",
    customer: "CUST-001",
    grand_total: 100000,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-01",
    customer: "CUST-001",
    grand_total: 560000,
  },
  {
    branch: "Jakarta",
    posting_date: "2024-01-01",
    customer: "CUST-001",
    grand_total: 720000,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-02",
    customer: "CUST-001",
    grand_total: 340000,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-02",
    customer: "CUST-001",
    grand_total: 568000,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-02",
    customer: "CUST-001",
    grand_total: 142000,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-02",
    customer: "CUST-001",
    grand_total: 256000,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-03",
    customer: "CUST-001",
    grand_total: 234500,
  },
  {
    branch: "Surabaya",
    posting_date: "2024-01-03",
    customer: "CUST-001",
    grand_total: 345600,
  },
  {
    branch: "Jakarta",
    posting_date: "2024-01-03",
    customer: "CUST-001",
    grand_total: 125000,
  },
  {
    branch: "Jakarta",
    posting_date: "2024-01-03",
    customer: "CUST-001",
    grand_total: 70000,
  },
  {
    branch: "Jakarta",
    posting_date: "2024-01-03",
    customer: "CUST-001",
    grand_total: 86000,
  },
];

function processData(data_group, data_raw) {
  const result = [];

  // Mengambil unique branches
  const branches = [...new Set(data_group.map((item) => item.branch))];

  branches.forEach((branch) => {
    const branchData = data_raw.filter((item) => item.branch === branch);

    const branchTotal = branchData.reduce(
      (sum, item) => sum + item.grand_total,
      0
    );
    result.push({ indent: 0, branch, grand_total: branchTotal });

    const dates = [...new Set(branchData.map((item) => item.posting_date))];

    dates.forEach((date) => {
      const dateData = branchData.filter((item) => item.posting_date === date);

      const dateTotal = dateData.reduce(
        (sum, item) => sum + item.grand_total,
        0
      );
      result.push({ indent: 1, posting_date: date, grand_total: dateTotal });

      dateData.forEach((item) => {
        result.push({ indent: 2, ...item });
      });
    });
  });

  return result;
}

console.log(JSON.stringify(processData(data_group, data_raw), null, 2));
