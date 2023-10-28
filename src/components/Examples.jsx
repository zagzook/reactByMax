import React, { useState } from 'react';

import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';

const Examples = (props) => {
  const [tabContent, setContent] = useState();

  const handleSelect = (selectedButton) => {
    //selectedButton  => 'Components', 'JSX', 'Props', 'State'

    setContent(selectedButton);
  };

  let content = <p>Please select a topic.</p>;

  if (tabContent) {
    content = (
      <div id='tab-content'>
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <code>{EXAMPLES[tabContent].code}</code>
      </div>
    );
  }

  return (
    <Section
      id='examples'
      title='Examples'>
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={tabContent === 'components'}
              onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === 'jsx'}
              onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === 'props'}
              onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === 'state'}
              onSelect={() => handleSelect('state')}>
              State
            </TabButton>
          </>
        }>
        {content}
      </Tabs>
    </Section>
  );
};

export default Examples;
