'use strict';

/**
 * Custom condition. This executes a condition script provided by the user.
 * @param {Object} config
 * @param {Object} config.conditionConfig Condition config.
 * @param {Function} config.conditionConfig.script The custom script function.
 * @param {Object} [event] The underlying event object the triggered the rule.
 * @param {Object} [event.target] The element where the event originated.
 * @param {HTMLElement} [relatedElement] The element the rule was targeting.
 * @returns {boolean}
 */
module.exports = function(config, event, relatedElement) {
  return config.conditionConfig.script.call(
    relatedElement,
    event,
    event ? event.target : undefined);
};
