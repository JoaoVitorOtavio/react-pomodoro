import React from 'react';
import { render } from '@testing-library/react';
import Customizer from '../../../Customizer';
import Timer from '../../../Timer';

import FlipCardComponent from '../index';

describe('Flip Card', () => {
    it('Should Render component', () => {
        // spying and mocking play sound to not cause error 
        jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => { })

        render(<FlipCardComponent cardType={'click'} BackContent={Customizer} FrontContent={Timer} />)
    })

})