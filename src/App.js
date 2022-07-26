import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Fullpage from './component/Fullpage/Fullpage';
import CompanyInfo from './page/Company/CompanyInfo';
import CompanyCi from './page/Company/CompanyCi';
import CompanyManpower from './page/Company/CompanyManpower';
import CompanyCollabo from './page/Company/CompanyCollabo';
import CompanyHistory from './page/Company/CompanyHistory';
import CompanyRoad from './page/Company/CompanyRoad';
import MASummary from './page/MnAIpo/MASummary';
import MAResult from './page/MnAIpo/MAResult';
import MAProcess from './page/MnAIpo/MAProcess';
import IpoSummary from './page/MnAIpo/IpoSummary';
import IpoResult from './page/MnAIpo/IpoResult';
import IpoProcess from './page/MnAIpo/IpoProcess';
import InvestSummary from './page/Invest/InvestSummary';
import InvestPlan from './page/Invest/InvestPlan';
import InvestStrategy from './page/Invest/InvestStrategy';
import InvestEmpowerment from './page/Invest/InvestEmpowerment';
import InvestProcess from './page/Invest/InvestProcess';
import AbroadInfo from './page/Abroad/AbroadInfo';
import AbroadCase from './page/Abroad/AbroadCase';
import AbroadProcess from './page/Abroad/AbroadProcess';
import IndustryIssue from './page/Indusrty/IndustryIssue';
import IndustrySupport from './page/Indusrty/IndustrySupport';
import IndustryConfirm from './page/Indusrty/IndustryConfirm';
import IndustryTransfer from './page/Indusrty/IndustryTransfer';
import IndustryTrade from './page/Indusrty/IndustryTrade';
import IndustryValue from './page/Indusrty/IndustryValue';
import IndustryCredit from './page/Indusrty/IndustryCredit';
import Notice from './page/Notice/Notice';
import NoticeNews from './page/Notice/NoticeNews';
import NoticeColumn from './page/Notice/NoticeColumn';
import NoticeInfo from './page/Notice/NoticeInfo';
import NoticeInquiry from './page/Notice/NoticeInquiry';
import NoticeRequest from './page/Notice/NoticeRequest';
import InvestBusiness from './page/Invest/InvestBusiness';
import confirmList from './component/Industry/IndustryConfirm/industry_confirm.json';
import IndustryConfirmDetail from './page/Indusrty/IndustryConfirmDetail';
import Login from './page/Common/Login';
import Search from './page/Common/Search';
import ChinaInfo from './page/Common/ChinaInfo';
import EnglishInfo from './page/Common/EnglishInfo';
import AbroadCaseDetail from './page/Abroad/AbroadCaseDetail';
import NoticeInquiryForm from './page/Notice/NoticeInquiryForm';
import SearchNotice1 from './page/Common/Search/SearchNotice1';
import SearchNotice2 from './page/Common/Search/SearchNotice2';
import SearchNotice3 from './page/Common/Search/SearchNotice3';
import SearchNotice4 from './page/Common/Search/SearchNotice4';
import SearchNotice5 from './page/Common/Search/SearchNotice5';
import SearchIndustry1 from './page/Common/Search/SearchIndustry1';
import SearchIndustry2 from './page/Common/Search/SearchIndustry2';
import IndustryDetail from './component/Industry/IndustryDetail/IndustryDetail';
import LoginRedirect from './route/LoginRedirect';
import NoticeDetail from './page/Notice/NoticeDetail/NoticeDetail';
import NoticeColumnDetail from './page/Notice/NoticeDetail/NoticeColumnDetail';
import NoticeInfoDetail from './page/Notice/NoticeDetail/NoticeInfoDetail';
import NoticeInquiryDetail from './page/Notice/NoticeDetail/NoticeInquiryDetail';
import NoticeNewsDetail from './page/Notice/NoticeDetail/NoticeNewsDetail';
import tradeList from './component/Industry/IndustryDetail/techTrade_detail.json';
import infoList from './page/Notice/NoticeDetail/consulting_Detail.json'
import IndustryIssueDetail from './component/Industry/IndustryIssueDetail/IndustryIssueDetail';
import issueList from './component/Industry/IndustryIssueDetail/government_detail.json';

function App() {
  const [data, setData] = useState(tradeList);
  let [items, setItems] = useState(confirmList);
  const [auth, setAuth] = useState(false);
  const [infoData, setInfoData] = useState(infoList);
  const [noticeData, setNoticeData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [inquiryData, setInquiryData] = useState([]);
  const [policyData, setPolicyData] = useState([]);
  const [issueData, setIssueData] = useState(issueList);



  useEffect(() => {
    fetch('/data/tradeInformation_detail.json')
      .then((response) => response.json())
      .then((response) => setNoticeData(response));
  }, []);

  useEffect(() => {
    fetch('/data/newsList.json')
      .then((response) => response.json())
      .then((response) => setNewsData(response));
  }, []);

  useEffect(() => {
    fetch('/data/qa_detail.json')
      .then((response) => response.json())
      .then((response) => setInquiryData(response));
  }, []);

  useEffect(() => {
    fetch('/data/policyInfo_detail.json')
      .then((response) => response.json())
      .then((response) => setPolicyData(response));
  }, []);

  useEffect(() => {
    console.log('로그인인증값', auth);
  }, [auth]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fullpage />} />
          <Route path='/company' element={<CompanyInfo title='Company' sub='기업소개' />} />
          <Route path='/company/ci' element={<CompanyCi title='Company' sub='CI' />} />
          <Route path='/company/manpower' element={<CompanyManpower title='Company' sub='Manpower' />} />
          <Route path='/company/collabo' element={<CompanyCollabo title='Company' sub='협력기관' />} />
          <Route path='/company/history' element={<CompanyHistory title='Company' sub='연혁' />} />
          <Route path='/company/road' element={<CompanyRoad title='Company' sub='오시는길' />} />
          <Route path='/mna' element={<MASummary title='M&A' sub='M&A 개요' />} />
          <Route path='/mna/result' element={<MAResult title='M&A' sub='M&A 성과' />} />
          <Route path='/mna/process' element={<MAProcess title='M&A' sub='M&A 프로세스' />} />
          <Route path='/ipo' element={<IpoSummary title='IPO' sub='IPO 개요' />} />
          <Route path='/ipo/result' element={<IpoResult title='IPO' sub='IPO 성과' />} />
          <Route path='/ipo/process' element={<IpoProcess title='IPO' sub='IPO 프로세스' />} />
          <Route path='/invest/result' element={<InvestSummary title='투자/경영' sub='투자개요/사례' />} />
          <Route path='/invest' element={<InvestBusiness title='투자/경영' sub='경영컨설팅' />} />
          <Route path='/invest/plan' element={<InvestPlan title='투자/경영' sub='사업계획서/IR' />} />
          <Route path='/invest/strategy' element={<InvestStrategy title='투자/경영' sub='전략수립' />} />
          <Route path='/invest/empowerment' element={<InvestEmpowerment title='투자/경영' sub='역량강화' />} />
          <Route path='/invest/process' element={<InvestProcess title='투자/경영' sub='투자 컨설팅 과정' />} />
          <Route path='/abroad' element={<AbroadInfo title='Abroad' sub='해외 진출 사업' />} />
          <Route path='/abroad/case' element={<AbroadCase title='Abroad' sub='해외 진출 지원' />} />
          <Route path='/abroad/process' element={<AbroadProcess title='Abroad' sub='해외 지사 사업' />} />
          <Route path='/industry' element={<IndustryIssue title='Industry' sub='산업 별 이슈' />} />
          <Route path='/industry/support' element={<IndustrySupport title='Industry' sub='지원 사업' />} />
          <Route path='/industry/confirm' element={<IndustryConfirm title='Industry' sub='기업/기술 인증' />} />
          <Route path='/industry/confirm/detail/:id' element={<IndustryConfirmDetail data={items} />} />
          <Route path='/industry/transfer' element={<IndustryTransfer title='Industry' sub='기술 이전' />} />
          <Route path='/industry/trade' element={<IndustryTrade title='Industry' sub='기술 거래' />} />
          <Route path='/industry/value' element={<IndustryValue title='Industry' sub='가치 평가' />} />
          <Route path='/industry/credit' element={<IndustryCredit title='Industry' sub='신용 평가' />} />
          <Route path='/notice' element={<Notice title='Notice' sub='공지사항' auth={auth} setAuth={setAuth} />} />
          <Route path='/notice/news' element={<NoticeNews title='Notice' sub='뉴스' />} />
          <Route path='/notice/support' element={<NoticeColumn title='Notice' sub='기업지원정보' />} />
          <Route path='/notice/info' element={<NoticeInfo title='Notice' sub='컨설팅 실적' />} />
          <Route path='/notice/inquiry' element={<NoticeInquiry title='Notice' sub='문의하기' />} />
          <Route path='/notice/request' element={<NoticeRequest title='Notice' sub='상담신청' />} />
          <Route path='/login' element={<Login setAuth={setAuth} />} />
          <Route path='/search/:word' element={<Search />} />
          <Route path='/china' element={<ChinaInfo />} />
          <Route path='/english' element={<EnglishInfo />} />
          <Route path='/abroad/case/detail/:id' element={<AbroadCaseDetail />} />
          <Route path='/notice/inquiryForm' element={<NoticeInquiryForm title='Notice' sub='문의하기' />} />
          <Route path='/notice/:word' element={<SearchNotice1 />} />
          <Route path='/notice/news/:word' element={<SearchNotice2 />} />
          <Route path='/notice/support/:word' element={<SearchNotice3 />} />
          <Route path='/notice/info/:word' element={<SearchNotice4 />} />
          <Route path='/notice/inquiry/:word' element={<SearchNotice5 />} />
          <Route path='/industry/:word' element={<SearchIndustry1 />} />
          <Route path='/industry/detail/:id' element={<IndustryIssueDetail issueData={issueData} />} />
          <Route path='/industry/trade/:word' element={<SearchIndustry2 />} />
          <Route path='/industry/trade/detail/:id' element={<IndustryDetail data={data} />} />
          <Route path='/notice/editor/' element={<LoginRedirect auth={auth} />} />
          <Route path='/notice/detail/:id' element={<NoticeDetail noticeData={noticeData} />} />
          <Route path='/notice/support/detail/:id' element={<NoticeColumnDetail policyData={policyData} />} />
          <Route path='/notice/info/detail/:id' element={<NoticeInfoDetail infoData={infoData} />} />
          <Route path='/notice/inquiry/detail/:id' element={<NoticeInquiryDetail inquiryData={inquiryData} />} />
          <Route path='/notice/news/detail/:id' element={<NoticeNewsDetail newsData={newsData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
