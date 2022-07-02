/*
That's where we were supposed to store the data but we didn't and I dont know why
*/

/* import { useState, useEffect } from "react";
import { supabase } from "./_init";
export const Data = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Call data every 10 seconds using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      supabase
        .from("store")
        .select("*")
        .then((res, error) => {
          if (!error) {
            setData(res);
            setLoading(false);
          }
        })
        .catch(console.error);
      console.log(data);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // When user click on button console log the data
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return <div>Check console</div>;
  }
};
 */
