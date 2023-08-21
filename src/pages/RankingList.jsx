function RankingList({ store, point, grade, theme, themeImg }) {
  return (
    <div className="escape_rankingPage">
      <div className="escape_rankingListContainer">
        <div className="escape_rankingList">
          <img className="themeImg" src={themeImg} alt={theme} />
          <div className="themeCafe">
            <h3 className="store">{store}</h3>
            <span className="point">{point}</span>
            <span className="grade">{grade}</span>
          </div>
          <h4 className="theme">{theme}</h4>
        </div>
      </div>
    </div>
  );
}

export default RankingList;
