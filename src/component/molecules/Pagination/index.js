import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';
import { NextButton, PageNum, PaginationWrap, PrevButton } from './style';

export const Pagination = ({ total, limit, page, setPage, tab, setTab }) => {
  const numPage = Math.ceil(total / limit);
  const newArr = Array(numPage).fill(false);

  const prevBtn = () => {
    setPage(1);
    setTab([true]);
  };

  const nextBtn = () => {
    newArr[numPage - 1] = true;
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
          <PageNum key={i + 1} onClick={() => pageClick(i)} color={tab[i] ? 'coral' : 'white'}>
            {i + 1}
          </PageNum>
        ))}
      <NextButton onClick={nextBtn} disabled={page === numPage}>
        <FaCaretSquareRight size={35} />
      </NextButton>
    </PaginationWrap>
  );
};
