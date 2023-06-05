/**
 * @AUTOR Vanderson de Moura Vauruk
 * LinkedIn: https://www.linkedin.com/in/vauruk/?locale=en_US
 * @param params
 */
const validateFistPosition = params => {
  const error = params.length > 0 ? params[0] : false;
  if (typeof error === 'boolean') {
    return error;
  }
  return false;
};

const consoleDebug = (...params) => {
  const error = validateFistPosition(params);
  error
    ? __DEV__ && console.error('[VANDERSON DEBUG-MODE-ERROR]:', params)
    : __DEV__ && console.log('[VANDERSON DEBUG-MODE]:', params);
};

export default consoleDebug;
