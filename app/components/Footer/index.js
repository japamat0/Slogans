import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.builtBy}
          values={{
            repo: <A href="https://github.com/japamat">Check out the code</A>,
          }}
        />
      </section>
      <section>
        <FormattedMessage
          {...messages.testDataMsg}
          values={{
            source: <A href="https://mockaroo.com/">Mockaroo</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
