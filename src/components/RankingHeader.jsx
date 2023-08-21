import Button from './Button';

// eslint-disable-next-line react/prop-types
function RankingHeader({ onClick1, onClick2 }) {
  return (
    <div className="escape_rankingHeader">
      <h2>순위</h2>
      <div>
        <Button onClick={onClick1}>높은순</Button>
        <Button onClick={onClick2}>낮은순</Button>
      </div>
    </div>
  );
}

export default RankingHeader;
