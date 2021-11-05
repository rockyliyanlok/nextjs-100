const withPWA = require('next-pwa')

const headers = async () => {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ],
    },
  ]
}

module.exports = withPWA({
  pwa: {
    dest: 'public'
  },
  headers
})
