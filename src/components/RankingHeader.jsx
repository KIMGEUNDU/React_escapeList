import Button from './Button';

function RankingHeader() {
  return (
    <div className="escape_rankingHeader">
      <h2>순위</h2>
      <div>
        <Button>높은순</Button>
        <Button>낮은순</Button>
      </div>
    </div>
  );
}

export default RankingHeader;
