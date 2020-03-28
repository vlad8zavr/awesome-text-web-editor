import React from 'react';
import { shallow } from 'enzyme';
import Leaf from '../../src/components/Editor/Leaf/Leaf';

describe('layout', () => {
  
    it('Leaf props has children of type Array', () => {
        const props = {
          leaf: { italic: null, bold: null },
          children: [],
        };
        const component = shallow(<Leaf {...props} />);
        // Received: {"children": [], "style": {"fontStyle": "italic", "fontWeight": "normal"}}
        //expect(component.props()).toContain('children');
        expect(component.props()).toEqual(
            expect.objectContaining({
                children: expect.any(Array),
            }),
        );
    });
  
});
