'use strict';

const values = require('../../utils/object_utils').values;

const BINARY_OPTIONS = {
  DTO: 'dto',
  SERVICE: 'service',
  PAGINATION: 'pagination',
  MICROSERVICE: 'microservice',
  SEARCH_ENGINE: 'searchEngine',
  ANGULAR_SUFFIX: 'angularSuffix',
  TABLE_PREFIX: 'tablePrefix',
  AUDIT : 'audit'
};
const VALUES = {
  dto: {MAPSTRUCT: 'mapstruct'},
  service: {SERVICE_CLASS: 'serviceClass', SERVICE_IMPL: 'serviceImpl'},
  pagination: {
    PAGER: 'pager',
    PAGINATION: 'pagination',
    'INFINITE-SCROLL': 'infinite-scroll'
  },
  searchEngine: {ELASTIC_SEARCH: 'elasticsearch'},
  audit : {
    'AbstractAuditingEntity' : 'AbstractAuditingEntity',
    'AbstractWorkflowAuditingEntity' : 'AbstractWorkflowAuditingEntity'
  }
};

function exists(passedOption, passedValue) {
  for (let option in BINARY_OPTIONS) {
    if (passedOption === BINARY_OPTIONS[option]
      && (passedOption === BINARY_OPTIONS.MICROSERVICE || passedOption === BINARY_OPTIONS.ANGULAR_SUFFIX || passedOption === BINARY_OPTIONS.TABLE_PREFIX
      || values(VALUES[BINARY_OPTIONS[option]]).indexOf(passedValue) !== -1)) {
      return true;
    }
  }
  return false;
}

module.exports = {
  BINARY_OPTIONS: BINARY_OPTIONS,
  BINARY_OPTION_VALUES: VALUES,
  exists: exists
};
