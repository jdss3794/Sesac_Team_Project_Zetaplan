import React from 'react';
import DetailFooter from '../../component/Detail/DetailFooter';
import IndustryHeader from '../../component/Detail/IndustryHeader';
import IssueList from '../../component/Industry/Issue/IssueList';
import BoardSearch6 from './../../component/Search/BoardSearch6';
import '../../css/Indusrty/industryIssue.css'

const IndustryIssue = ({ title, sub }) => {
  return (
    <div id='IndustryIssue'>
      <IndustryHeader title={title} sub={sub} />
      <div id='SubInner'>
        <h2 className='detail-title'>산업별이슈</h2>
        <div class='board-search-container'>
          <form method='post' name='search' action='/notice'>
            <table class='pull-right'>
              <tr>
                <td></td>
                <td>
                  <BoardSearch6 />
                </td>
                <td></td>
              </tr>
            </table>
          </form>
        </div>
        <IssueList />
      </div>
      <DetailFooter />
    </div>
  );
};

export default IndustryIssue;
