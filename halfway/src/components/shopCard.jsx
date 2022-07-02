// React component with image title and position from user location

export const ShopCard = ({
  shopName,
  /* adress, */
  /* description, */
  /* schedule , */
  category,
}) => {
  return (
    <>
      <div className="shopCard">
        <img
          src={
            "https://vrhpddolravjrcrtxbor.supabase.co/storage/v1/object/public/image/" +
            shopName +
            ".png"
          }
          alt=""
          className={"shopImg" + " " + category}
        />
        <span className="shopName">{shopName}</span>
        <span className="distance">
          à{" "}
          {
            // Random number between 15 and 200
            Math.floor(Math.random() * (200 - 15 + 1)) + 15
          }
          mètre de vous
        </span>
        {/*
        We would have written the code to show the schedule
        of the shop when user click on the card
        */}
        {/* <p className="description">{description}</p> */}
        {/* <div>
          <h3>lundi</h3>
          <p>{schedule.lundi}</p>
          <h3>mardi</h3>
          <p>{schedule.mardi}</p>
          <h3>mercredi</h3>
          <p>{schedule.mercredi}</p>
          <h3>jeudi</h3>
          <p>{schedule.jeudi}</p>
          <h3>vendredi</h3>
          <p>{schedule.vendredi}</p>
          <h3>samedi</h3>
          <p>{schedule.samedi}</p>
          <h3>dimanche</h3>
          <p>{schedule.dimanche}</p>
        </div> */}
        {/* <p className="category">{category}</p> */}
      </div>
    </>
  );
};
