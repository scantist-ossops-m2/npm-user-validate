exports.email = email
exports.pw = pw
exports.username = username

var requirements = exports.requirements = {
  username: {
    lowerCase: 'Username must be lowercase',
    urlSafe: 'Username may not contain non-url-safe chars',
    dot: 'Username may not start with "."'
  },
  password: {},
  email: {
    length: 'Email length must be less then or equal to 254 characters long',
    valid: 'Email must be an email address'
  }
};

function username (un) {
  if (un !== un.toLowerCase()) {
    return new Error(requirements.username.lowerCase)
  }

  if (un !== encodeURIComponent(un)) {
    return new Error(requirements.username.urlSafe)
  }

  if (un.charAt(0) === '.') {
    return new Error(requirements.username.dot)
  }

  return null
}

function email (em) {
  if (em.length > 254) {
    return new Error(requirements.email.length)
  }
  if (!em.match(/^[^@]+@.+\..+$/)) {
    return new Error(requirements.email.valid)
  }

  return null
}

function pw (pw) {
  return null
}
