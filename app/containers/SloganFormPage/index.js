/**
 *
 * SloganFormPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectSloganInput,
  makeSelectAddedSlogan,
  makeSelectSloganSending,
  makeSelectSloganError,
} from './selectors';
import { changeSlogan, submitSlogan } from './actions';
import Form from './Form';
import FormWrapper from './FormWrapper';
import Input from './Input';
import Label from './Label';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { statusCheck } from './helpers';
import Button from '../../components/Button';
import H2 from '../../components/H2';
import Span from '../../components/Span';

export function SloganFormPage(props) {
  const {
    onSubmitForm,
    onChangeSlogan,
    slogan,
    addedSlogan,
    sending,
    error,
  } = props;
  const key = 'sloganFormPage';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const formPageTheme = {
    color: '#2b5478',
    border: '#2b5478',
    font: `'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif`,
    fontSize: `0.85em`,
  };

  const messageSpanText = statusCheck(error, sending, addedSlogan, slogan);

  return (
    <div>
      <Helmet>
        <title>SloganFormPage</title>
        <meta name="description" content="Description of SloganFormPage" />
      </Helmet>
      <FormWrapper>
        <Form onSubmit={onSubmitForm}>
          <H2 centered theme={formPageTheme}>
            <Label theme={formPageTheme} htmlFor="slogan">
              <FormattedMessage {...messages.addSloganLabel} />
            </Label>
          </H2>
          <Input
            required
            id="slogan"
            type="text"
            placeholder="Add Your Custom Slogan"
            value={slogan}
            onChange={onChangeSlogan}
          />
          <Button theme={formPageTheme} handleRoute={onSubmitForm}>
            Submit
          </Button>
        </Form>
        <Span theme={formPageTheme}>{messageSpanText}</Span>
      </FormWrapper>
    </div>
  );
}

SloganFormPage.propTypes = {
  slogan: PropTypes.string.isRequired,
  addedSlogan: PropTypes.string,
  onSubmitForm: PropTypes.func.isRequired,
  onChangeSlogan: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  sending: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  slogan: makeSelectSloganInput(),
  addedSlogan: makeSelectAddedSlogan(),
  sending: makeSelectSloganSending(),
  error: makeSelectSloganError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSlogan: evt => dispatch(changeSlogan(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitSlogan(evt.target));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SloganFormPage);
