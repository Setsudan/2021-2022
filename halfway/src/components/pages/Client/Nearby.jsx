import { ShopCard } from "../../shopCard";
export const Nearby = ({ data }) => {
  return (
    <>
      <h2>Commerce à proximité</h2>
      <div className="nearby-list">
        {data.map((shop, index) => {
          // long et lat de place de nation paris
          const lat = 48.856614;
          const long = 2.3522219;
          // the first long and lat are the user's position that we can get from
          // src/func/getPos.js
          // for presentation purpose and because the apis we had were not complete
          // we only show the shops near place de nation in Paris
          if (long - long + 0.004 <= 0.05 && lat - lat - 0.0005 <= 0.05) {
            return (
              <ShopCard
                key={index}
                shopName={shop.name}
                adress={shop.adress}
                description={shop.description}
                /* schedule={shop.schedule} */
                category={shop.category}
              />
            );
          }
        })}
      </div>
    </>
  );
};
