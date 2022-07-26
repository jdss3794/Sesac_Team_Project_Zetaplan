const handleCategoryFnc = (e, input, setInput, categoryNum, setCategoryNum, setChecked, categoryData) => {
  // 컨설팅 분야 handle 함수
  // e.target.value가 category.category 와 같다면 그에 해당하는 id를 state로 설정한다.
  let currentCategory = e.target.value;
  let select = categoryData.filter((item)=>{return item.category === currentCategory});
  setCategoryNum(select[0] !== undefined ? select[0].id : 0);

  // categoryNum이 바뀌면 checked를 false로 설정
  const checkedArr = [];
  categoryData[categoryNum].detail.map((ele)=>checkedArr.push(false))
  // categoryNum이 바뀌면 categoryDetail을 빈 배열로 설정
  setChecked(checkedArr);
  setInput({...input, categoryDetail: []});
}

const handleInputFnc = (e, input, setInput) => {
  // input 입력걊을 저장하는 함수
  // checkbox는 array로 저장하기 때문에 spread연산자를 이용하여 기존배열에 추가
  setInput(e.target.name === 'categoryDetail' 
  ? { ...input, [e.target.name]: [...input.categoryDetail, e.target.value] } 
  : { ...input, [e.target.name]: e.target.value })
}

const handleChkBoxFnc = (e, idx, checked, setChecked, input, setInput) => {
  // 컨설팅 분야 checkbox 관리 함수
  const chkArr = [...checked];
  chkArr[idx] = !chkArr[idx];
  setChecked(chkArr);
  // setInput({...input, categoryDetail: []});

  e.target.checked
  ? setInput({...input, categoryDetail: [...input.categoryDetail, e.target.value]})
  : chkDeleteFnc(e.target.value, idx)
}

const chkDeleteFnc = (value, idx, input, setInput)=> {
  // 내가 체크를 푼 항목과 같은 이름의 값을 array에서 제거
  // 내가 체크를 푼 항목의 값과 같은 이름을 가진 요소의 인덱스 번호를 찾아서 splice
  const chkboxArr = [...input.categoryDetail];
  let deleteNum = chkboxArr.indexOf(`${value}`);
  chkboxArr.splice(deleteNum, 1);
  setInput({...input, categoryDetail: chkboxArr})
}


export { handleCategoryFnc, handleChkBoxFnc, handleInputFnc };