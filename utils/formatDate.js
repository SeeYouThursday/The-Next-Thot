const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const formatDate = (date) => dayjs(date).format('dddd, MMMM D, YYYY h:mm A');

function dateGetter() {
  const date = this.default;
  return formatDate(date);
}

module.exports = { formatDate, dateGetter };
