const withPWA = require('next-pwa')
 
const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Content-Security-Policy',
    value: 'default-src \'self\''
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
]

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  }
})
