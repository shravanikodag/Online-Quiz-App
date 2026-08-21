const sql=[
     {
    id: 1,
    question: "Which SQL clause is used to filter groups after aggregation?",
    options: [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    answer: "HAVING"
  },
  {
    id: 2,
    question: "Which JOIN returns only the matching rows from both tables?",
    options: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL JOIN"
    ],
    answer: "INNER JOIN"
  },
  {
    id: 3,
    question: "Which SQL function returns the total number of rows?",
    options: [
      "SUM()",
      "COUNT()",
      "AVG()",
      "TOTAL()"
    ],
    answer: "COUNT()"
  },
  {
    id: 4,
    question: "Which constraint ensures that all values in a column are unique?",
    options: [
      "CHECK",
      "FOREIGN KEY",
      "UNIQUE",
      "DEFAULT"
    ],
    answer: "UNIQUE"
  },
  {
    id: 5,
    question: "Which SQL operator is used to search for a pattern?",
    options: [
      "MATCH",
      "SEARCH",
      "LIKE",
      "IN"
    ],
    answer: "LIKE"
  },
  {
    id: 6,
    question: "Which command permanently removes a table and its data?",
    options: [
      "DELETE",
      "REMOVE",
      "DROP",
      "TRUNCATE"
    ],
    answer: "DROP"
  },
  {
    id: 7,
    question: "Which SQL clause is executed before HAVING?",
    options: [
      "ORDER BY",
      "GROUP BY",
      "LIMIT",
      "SELECT"
    ],
    answer: "GROUP BY"
  },
  {
    id: 8,
    question: "Which JOIN returns all rows from the left table and matching rows from the right table?",
    options: [
      "INNER JOIN",
      "RIGHT JOIN",
      "LEFT JOIN",
      "CROSS JOIN"
    ],
    answer: "LEFT JOIN"
  },
  {
    id: 9,
    question: "Which SQL function returns the highest value in a column?",
    options: [
      "TOP()",
      "MAX()",
      "HIGH()",
      "UPPER()"
    ],
    answer: "MAX()"
  },
  {
    id: 10,
    question: "Which SQL keyword is used to remove duplicate records?",
    options: [
      "UNIQUE",
      "DISTINCT",
      "REMOVE",
      "GROUP"
    ],
    answer: "DISTINCT"
  },
  {
    id: 11,
    question: "Which SQL clause is used to sort query results?",
    options: [
      "GROUP BY",
      "ORDER BY",
      "SORT BY",
      "ARRANGE BY"
    ],
    answer: "ORDER BY"
  },
  {
    id: 12,
    question: "Which SQL function returns the average value of a numeric column?",
    options: [
      "SUM()",
      "AVG()",
      "MEAN()",
      "COUNT()"
    ],
    answer: "AVG()"
  },
  {
    id: 13,
    question: "Which keyword is used to combine the results of two SELECT statements without duplicates?",
    options: [
      "UNION",
      "JOIN",
      "MERGE",
      "INTERSECT"
    ],
    answer: "UNION"
  },
  {
    id: 14,
    question: "Which SQL command removes all rows from a table but keeps its structure?",
    options: [
      "DELETE",
      "DROP",
      "TRUNCATE",
      "REMOVE"
    ],
    answer: "TRUNCATE"
  },
  {
    id: 15,
    question: "Which type of subquery returns multiple rows?",
    options: [
      "Scalar Subquery",
      "Correlated Subquery",
      "Single Row Subquery",
      "Multi-row Subquery"
    ],
    answer: "Multi-row Subquery"
  },
  {
    id: 16,
    question: "Which SQL keyword is commonly used with a subquery returning multiple values?",
    options: [
      "LIKE",
      "BETWEEN",
      "IN",
      "AS"
    ],
    answer: "IN"
  },
  {
    id: 17,
    question: "Which SQL function replaces NULL values with a specified value in MySQL?",
    options: [
      "COALESCE()",
      "IFNULL()",
      "ISNULL()",
      "NVL()"
    ],
    answer: "IFNULL()"
  },
  {
    id: 18,
    question: "Which SQL window function assigns a unique rank without skipping numbers?",
    options: [
      "RANK()",
      "ROW_NUMBER()",
      "DENSE_RANK()",
      "POSITION()"
    ],
    answer: "DENSE_RANK()"
  },
  {
    id: 19,
    question: "Which SQL window function assigns a unique sequential number to each row?",
    options: [
      "ROW_NUMBER()",
      "RANK()",
      "DENSE_RANK()",
      "COUNT()"
    ],
    answer: "ROW_NUMBER()"
  },
  {
    id: 20,
    question: "Which SQL keyword is used to create a Common Table Expression (CTE)?",
    options: [
      "VIEW",
      "TEMP",
      "WITH",
      "COMMON"
    ],
    answer: "WITH"
  }
]
export default sql;