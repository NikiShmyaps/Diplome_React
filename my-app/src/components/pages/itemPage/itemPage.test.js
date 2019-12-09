import React from 'react';
import ItemPage from './itemPage';
import {shallow, mount} from 'enzyme';
import Service from "../../../services/service"

const itemPage = shallow(<ItemPage/>);

describe('Testing <MainPage/>', ()=> {
    it('ItemPage have rendered correctly', ()=>{
    expect(itemPage).toMatchSnapshot();
  })
  it('ItemPage state "items" is null', ()=>{
    expect(itemPage.state().items).toBeNull();
  })
});

// describe('Service test <ItemPage/>', ()=>{
//   const service = new Service();
//   const list = mount(<ItemPage
//                       getData={service.getCoffee()}
//                       renderItem={({name})=> name}/>)

//   it('check Service', ()=>{
//     list.setState({items: [{name: 'sfd', id: 1},{name: 'sfd', id: 2}]});
//   })
// }); 