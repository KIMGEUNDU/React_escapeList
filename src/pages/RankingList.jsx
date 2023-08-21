import { useEffect, useState } from 'react';
import Ranking from './Ranking';

function RankingList() {
  // const dataLoad = async () => {
  //   const dataList = await data();
  //   const item = dataList.items;

  //   item.map((v) => console.log(v.theme));
  // };

  useEffect(() => {
    // const data = async () => {
    //   const response = await fetch(
    //     'http://127.0.0.1:8090/api/collections/escape/records'
    //   );
    //   const result = await response.json();
    //   return result;
    // };
    // console.log(data());
  }, []);

  return <Ranking />;
}

export default RankingList;
