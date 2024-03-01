'use strict';

/**
 * entire router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::entire.entire');
