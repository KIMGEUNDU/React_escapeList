import key from '../assets/열쇠.png';

function Logo() {
  return (
    <header className="escape_header">
      <img src={key} alt="로고이미지" />
      <h1>23년 8월 기준 방탈출테마 순위</h1>
    </header>
  );
}

export default Logo;
