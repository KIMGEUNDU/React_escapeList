import RankingHeader from '../components/RankingHeader';
import HeaderList from './HeaderList';
import RankingList from './RankingList';

function Ranking() {
  return (
    <>
      <HeaderList />
      <div className="escape_rankingPage">
        <RankingHeader />
        <RankingList />
        <div className="escape_rankingListContainer">
          <div className="escape_rankingList">
            <p className="themeImg">테마이미지</p>
            <div className="themeCafe">
              <h3 className="store">카페이름</h3>
              <span className="point">지점</span>
              <span className="grade">평점</span>
            </div>
            <h4 className="theme">테마이름</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ranking;
