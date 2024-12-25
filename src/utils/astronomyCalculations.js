import * as astronomia from 'astronomia'

const TARGET_LONGITUDE = 270.0
const TOLERANCE = 1e-6

const calculateSunLongitude = (jd) => {
  // Convert Julian Date to centuries since J2000.0
  const t = (jd - 2451545.0) / 36525
  const sun = astronomia.solar.true(t)
  return ((sun.lon * 180) / Math.PI) % 360
}

export const calculateWinterSolstice = (year, onProgress) => {
  const startDate = new Date(year, 10, 1)
  const endDate = new Date(year + 1, 0, 31)

  const startJD = astronomia.julian.DateToJD(startDate)
  const endJD = astronomia.julian.DateToJD(endDate)

  let left = startJD
  let right = endJD
  let bestJD = null

  while (right - left > TOLERANCE) {
    const mid = (left + right) / 2
    const longitude = calculateSunLongitude(mid)

    if (onProgress) {
      onProgress({
        left: (left - startJD) / (endJD - startJD),
        right: (right - startJD) / (endJD - startJD),
        current: (mid - startJD) / (endJD - startJD)
      })
    }

    if (Math.abs(longitude - TARGET_LONGITUDE) < TOLERANCE) {
      bestJD = mid
      break
    }

    if (longitude < TARGET_LONGITUDE) {
      left = mid
    } else {
      right = mid
    }

    bestJD = mid
  }

  const solsticeDate = astronomia.julian.JDToDate(bestJD)
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return {
    utcTime: `${solsticeDate.toLocaleString('en-US', { timeZone: 'UTC' })} UTC`,
    localTime: `${solsticeDate.toLocaleString('en-US', {
      timeZone: timezone
    })} ${timezone}`
  }
}
