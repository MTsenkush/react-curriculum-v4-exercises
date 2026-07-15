function SnackList() {
  const snacks = [
    { name: 'Apple', rank: 5 },
    { name: 'Protein bar', rank: 4 },
    { name: 'Dark chololate', rank: 3 },
    { name: 'Cheese', rank: 2 },
    { name: 'Fruit smoothie', rank: 1 },
  ];

  const snackSortedList = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <ol>
        {snackSortedList.map((snack) => (
          <li
            key={snack.name}
            style={{
              color: 'orange',
              fontSize: '24px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            {snack.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SnackList;
