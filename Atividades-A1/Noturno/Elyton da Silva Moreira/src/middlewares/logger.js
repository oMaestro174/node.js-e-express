require('colors')

const logger = (req, res, next) => {
  res.on('finish', () => {
    let color

    if (res.statusCode >= 200 && res.statusCode < 300) {
      color = 'green'
    } else if (res.statusCode >= 400) {
      color = 'red'
    } else {
      color = 'yellow'
    }

    const timestamp = new Date().toISOString()

    console.log(
      `[${timestamp}] ${req.method} ${req.url} - ${res.statusCode}`[color]
    )
  })

  next()
}

module.exports = logger