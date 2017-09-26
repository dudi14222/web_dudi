import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import {
  withKnobs,
  text, boolean, number, object,
} from '@kadira/storybook-addon-knobs';

import { SingleInput } from '../components/';


const stories = storiesOf('SingleInput', module);

stories.addDecorator(withKnobs);


stories.addWithInfo('with some props', '', () => {  
  const story = <SingleInput    
    inputType={'text'}
    controlFunc={action('changed')}
    placeholder={'placeholder'}
    className={'className'}
    id={'id'}
    disabled={boolean('Disabled', false)}
  />;
  return story;
});
