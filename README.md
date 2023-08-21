# 리액트 2차과제_웹사이트 랜딩 페이지 만들기

## 페이지보러가기
[방탈출테마 순위]()

## 폴더구조

```
escapeList
   ├─ src
   │ ├─ App.jsx
   │  ├─ assets
   │  ├─ components
   │  │  ├─ Button.jsx
   │  │  ├─ Logo.jsx
   │  │  ├─ Menu.jsx
   │  │  └─ RankingHeader.jsx
   │  ├─ getPbImageURL.js
   │  └─ pages
   │     ├─ HeaderList.jsx
   │     ├─ Ranking.jsx
   │     └─ RankingList.jsx

```

## 구현기능

```
  const [data, setData] = useState([]);

  const handleTopSort = () => {
    setData(data.toSorted((a, b) => a.grade - b.grade));
  };

  const handleBottomSort = () => {
    setData(data.toSorted((a, b) => b.grade - a.grade));
  };

```

높은순, 낮은순 버튼 클릭 시 평점이 높은순, 낮은순으로 재렌더링이 일어나게 구현했습니다.