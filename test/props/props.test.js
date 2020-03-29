import React from 'react';
import { shallow } from 'enzyme';
import Leaf from '../../src/components/Editor/Leaf/Leaf';

describe('props', () => {

    const props = {
        leaf: { italic: 'italic', bold: 'bold' },
        children: [],
    };
  
    it('Leaf props has children of type Array', () => {
        const component = shallow(<Leaf {...props} />);
        // Received: {"children": [], "style": {"fontStyle": "italic", "fontWeight": "normal"}}
        //expect(component.props()).toContain('children');
        expect(component.props()).toEqual(
            expect.objectContaining({
                children: expect.any(Array),
            }),
        );
    });

    it('Leaf fontStyle - italic', () => {
        const component = shallow(<Leaf {...props} />);
        expect(component.props().style.fontStyle).toEqual('italic');
    });

    it('Leaf fontWeight - bold', () => {
        const component = shallow(<Leaf {...props} />);
        expect(component.props().style.fontWeight).toEqual('bold');
    });
  
});
