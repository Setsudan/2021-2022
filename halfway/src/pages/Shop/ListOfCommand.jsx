// Show list of command in stock
// Language: javascript
// Path: src\pages\Shop\ListOfCommand.jsx

export const ListOfCommand = () => {
  return (
    <>
      <h1>Liste de commande</h1>
      {shopCommandList.map((item, index) => (
        <div className="user-command" key={index}>
          <h3>{item.userId}</h3>
          <ul className="command-list">
            {item.command.map((item, index) => (
              <li key={index}>
                {item.quantity}
                {item.product}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
