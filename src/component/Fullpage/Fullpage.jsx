import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import './fullpage.css';
import MainFullpage from './../MainFullpage/MainFullpage';
import MainFullpageNews from './../MainFullpage/MainFullpageNews/MainFullpageNews';
import MainFullPageAbroad from '../MainFullpage/MainFullPageAbroad/MainFullPageAbroad';
import MainFullpageInfo from '../MainFullpage/MainFullpageInfo/MainFullpageInfo';
import MainFullPageFooter from './../MainFullpage/MainFullPageFooter/MainFullPageFooter';

export default class Fullpage extends React.Component {
  render() {
    return (
      <FullPage controls controlsProps={{className: 'fullpage-paging'}}>
        <Slide className='fullpage-div'>
          <MainFullpage />
        </Slide>
        <Slide className='fullpage-div'>
          <MainFullpageInfo />
        </Slide>
        <Slide className='fullpage-div'>
          <MainFullPageAbroad />
        </Slide>
        <Slide className='fullpage-div'>
          <MainFullpageNews />
        </Slide>
        <Slide className='fullpage-div'>
          <MainFullPageFooter />
        </Slide>
      </FullPage>
    );
  }
}