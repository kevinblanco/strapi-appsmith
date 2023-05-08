'use strict';

/**
 * loan-term service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loan-term.loan-term');
