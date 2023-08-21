function Menu() {
  const list = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'Ranking' },
    { id: 3, label: 'All' },
  ];

  const ListArr = list.map((item) => <li key={item.id}>{item.label}</li>);

  return (
    <nav>
      <ul className="escape_menu">{ListArr}</ul>
    </nav>
  );
}

export default Menu;
