export const CheckoutShop = ({ item, index }) => {
  // Just a components ot render a list of all the shops where we bought something
  return (
    <>
      <div key={index} id={index} className="command-item">
        <img src={item.image} alt="" className="command-item-image" />
        <div className="command-item-info">
          <h3>{item.name}</h3>
          <h5>Déposé il y a {item.waitingSince} minutes</h5>
          <button className={item.style}>{item.status}</button>
        </div>
      </div>
    </>
  );
};
