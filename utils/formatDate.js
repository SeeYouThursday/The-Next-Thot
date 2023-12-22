const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const formatDate = (date) =>
  //?? Should the day of the week be left out? - delete 'dddd' from below to do so
  dayjs(date).format('dddd, MMMM D, YYYY [at] h:mm A');

function dateGetter() {
  const date = this.default;
  formatDate(date);
}

module.exports = { formatDate, dateGetter };
