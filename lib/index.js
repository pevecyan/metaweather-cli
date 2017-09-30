'use strict'
const ora = require('ora')
const metaweather = require('./metaweather')
const report = require('./report')

const init = () => {
  const spinner = ora('Locating you...')

  metaweather.getWeather(851128)
    .then(response => {
      spinner.stop()
      console.log(report.getSixDayWeatherReport(response.consolidated_weather))
      // console.log(report.getSourcesReport(response.sources))
    })
    .catch(err => {
      spinner.fail(err)
    })
}

module.exports = init
