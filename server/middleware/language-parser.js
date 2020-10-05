const languageParser = () => {
  return (req, res, next) => {
    console.log({ headers: req.headers })
    const acceptLanguage = req.headers['accept-language']
    if (acceptLanguage) {
      req.lang = acceptLanguage.split(',')[0]
    }
    return next()
  }
}

module.exports = languageParser
