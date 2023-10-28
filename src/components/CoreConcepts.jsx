import React from 'react';

import CoreConcept from './CoreConcept';
import Section from './Section';
import { CORE_CONCEPTS } from '../data';

const CoreConcepts = (props) => {
  return (
    <Section
      id='core-concepts'
      title='Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept
            key={conceptItem.title}
            {...conceptItem}
          />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
