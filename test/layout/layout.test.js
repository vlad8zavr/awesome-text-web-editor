import React from 'react';
import { shallow } from 'enzyme';
import InfoBar from '../../src/components/InfoBar/InfoBar';
import Toolbar from '../../src/components/Editor/Toolbar/Toolbar';
import SyncingEditor from '../../src/components/Editor/Editor';
import { DefaultElement, CodeElement } from '../../src/components/Editor/Elements/Elements';
import Leaf from '../../src/components/Editor/Leaf/Leaf';

describe('layout', () => {

  it('InfoBar should render correctly', () => {
      const component = shallow(<InfoBar />);
      expect(component).toMatchSnapshot();
  });

  it('Toolbar should render correctly', () => {
      const component = shallow(<Toolbar />);
      expect(component).toMatchSnapshot();
  });

  it('SyncingEditor should render correctly', () => {
      const component = shallow(<SyncingEditor />);
      expect(component).toMatchSnapshot();
  });

  it('Leaf should render correctly', () => {
      const props = {
        leaf: { italic: null, bold: null },
        children: [],
      };
      const component = shallow(<Leaf {...props} />);
      expect(component).toMatchSnapshot();
  });

  it('DefaultElement should render correctly', () => {
      const component = shallow(<DefaultElement />);
      expect(component).toMatchSnapshot();
  });

  it('CodeElement should render correctly', () => {
      const component = shallow(<CodeElement />);
      expect(component).toMatchSnapshot();
  });

});