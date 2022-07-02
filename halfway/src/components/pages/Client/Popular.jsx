import { ShopCard } from "../../shopCard";

export const Popular = ({ data }) => {
  return (
    <>
      <h2>Commerce du moment</h2>
      <div className="popular-list">
        {/*
          here would have been the code we wrote to show only the popular shops
          data.map((shop, index) => {
            if (shop.popularity > 5) {
              return (
                <ShopCard
                  key={index}
                  shopName={shop.name}
                  adress={shop.adress}
                  description={shop.description}
                  schedule={shop.schedule} 
                  category={shop.category}
                />
              );
            }
          }
          // Popularity would have been based on the number of visits in the last week
        */}
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
