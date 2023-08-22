import { useEffect, useState } from 'react';
import RankingHeader from '../components/RankingHeader';
import { getPbImageURL } from '../getPbImageURL';
import RankingList from './RankingList';

function Ranking() {
  const [data, setData] = useState([]);

  async function fetchList() {
    const response = await fetch(
      'https://escape.pockethost.io/api/collections/escape/records'
    );
    const data = await response.json();
    setData(data.items);

    return data.items;
  }

  useEffect(() => {
    fetchList();
  }, []);

  const handleTopSort = () => {
    setData(data.toSorted((a, b) => a.grade - b.grade));
  };

  const handleBottomSort = () => {
    setData(data.toSorted((a, b) => b.grade - a.grade));
  };

  return (
    <>
      <div>
        <RankingHeader onClick1={handleBottomSort} onClick2={handleTopSort} />
        <ul className="escape_ul">
          {data.map((item) => (
            <li key={item.id}>
              <RankingList
                store={item.store}
                point={item.point}
                grade={item.grade}
                theme={item.theme}
                themeImg={getPbImageURL(item, 'image')}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Ranking;
