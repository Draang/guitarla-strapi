'use strict';

/**
 * entire service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entire.entire');
