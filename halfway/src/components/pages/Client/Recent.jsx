import { ShopCard } from "../../shopCard";

export const Recent = ({ data }) => {
  return (
    <>
      <h2>Vos récents magasins</h2>
      <div className="recent-list">
        {
          // Here is the code we would have wrote for the recent shop
          // data.map((shop, index) => {
          //   if (shop.name in recentlyVisited) {
          //     return (
          //       <ShopCard
          //         key={index}
          //         shopName={shop.name}
          //         adress={shop.adress}
          //         description={shop.description}
          //         schedule={shop.schedule}
          //         category={shop.category}
          //       />
          //     );
          //   }
          // }
        }
        {
          // Return 10 random shops from data
          data
            .sort(() => Math.random() - 0.5)
            .slice(0, 10)
            .map((shop, index) => {
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
            })
        }
      </div>
    </>
  );
};
