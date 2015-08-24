var http = require('http')
var _ = require('highland')
var JSONStream = require('JSONStream')
var assert = require('assert')
var url

function find(query, cb) {
  if (typeof query === 'function')
    cb = query
  assert(typeof cb === 'function', 'hilltopperson.find requires that a callback argument be provided')

  if (process.env.NODE_ENV !== 'production')
    return cb(null, require(__dirname + '/development-data.json'))

  http.get(url, function (res) {
    _(res)
      .through(JSONStream.parse('*'))
      .where(query)
      .stopOnError(cb)
      .toArray(_.partial(cb, null))
  }).on('error', cb)
}

function exists(query, cb) {
  assert(typeof query === 'object', 'Argument 1 to hilltopperson.exists must be a query object')
  assert(Object.keys(query).length > 0, 'Invalid query passed to hilltopperson.exists')

  find(query, function (err, results) {
    assert(Array.isArray(results), 'hilltopperson.find returned bad result set')
    if (err) return cb(err)

    cb(null, results.length > 0)
  })
}

module.exports = function (apiUrl) {
  url = apiUrl

  return {
    find: find,
    exists: exists
  }
}
