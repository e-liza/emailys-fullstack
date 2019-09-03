// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = () => {
  const reviewFields = () => {};

  return;
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
