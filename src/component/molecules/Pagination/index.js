import { useState } from 'react';
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';
import { NextButton, PageNum, PaginationWrap, PrevButton } from './style';

export const Pagination = ({ total, limit, page, setPage }) => {
  const [tab, setTab] = useState(() => {
    // localStorage에 값이 없다면 true 있다면 불러온다.
    if (!localStorage.getItem('currentTab')) {
      return [true];
    } else {
      return JSON.parse(localStorage.getItem('currentTab'));
    }
  }); // 기본값 true를 줘서 1페이지 색 변환
  const numPage = Math.ceil(total / limit);
  const newArr = Array(numPage).fill(false);

  localStorage.setItem('currentPage', page);
  localStorage.setItem('currentTab', JSON.stringify(tab));

  const prevBtn = () => {
    setPage(1); // 첫 페이지 번호
    setTab([true]);
  };

  const nextBtn = () => {
    newArr[numPage - 1] = true; // 마지막 페이지 번호
    setPage(numPage);
    setTab(newArr);
  };

  const pageClick = (i) => {
    newArr[i] = tab[i] ? tab[i] : !tab[i]; // 페이지 클릭시 true면 같은거니깐 그대로, false면 변경
    setPage(i + 1);
    setTab(newArr);
  };

  return (
    <PaginationWrap>
      <PrevButton onClick={prevBtn} disabled={page === 1}>
        <FaCaretSquareLeft size={35} />
      </PrevButton>
      {Array(numPage)
        .fill()
        .map((_, i) => (
          <PageNum key={i + 1} onClick={() => pageClick(i)} color={JSON.parse(localStorage.getItem('currentTab'))[i] ? 'coral' : 'white'}>
            {i + 1}
          </PageNum>
        ))}
      <NextButton onClick={nextBtn} disabled={page === numPage}>
        <FaCaretSquareRight size={35} />
      </NextButton>
    </PaginationWrap>
  );
};
