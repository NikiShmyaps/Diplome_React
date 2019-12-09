import React from 'react';
import MainPage from './mainPage';
import {shallow} from 'enzyme';

describe('Testing <MainPage/>', ()=> {
  it('MainPage have rendered correctly', ()=>{
    const mainPage = shallow(<MainPage/>)
    expect(mainPage).toMatchSnapshot();
  })
}); 