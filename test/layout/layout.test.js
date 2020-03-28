import React from 'react';
import { shallow } from 'enzyme';
import InfoBar from '../../src/components/InfoBar/InfoBar';
import Toolbar from '../../src/components/Editor/Toolbar/Toolbar';

describe('layout', () => {

  it('InfoBar should render correctly', () => {
      const component = shallow(<InfoBar />);
      expect(component).toMatchSnapshot();
  });

  it('Toolbar should render correctly', () => {
      const component = shallow(<Toolbar />);
      expect(component).toMatchSnapshot();
  });

});