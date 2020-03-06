const { logger } = require('../lib/logger')

module.exports.handler = async (event) => {
  try {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true
      }, null, 2)
    }
  } catch (e) {
    logger.error(e)
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        error: e.message
      }, null, 2)
    }
  }
}
