const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const formatDate = (date) => dayjs(date).format('dddd, MMMM D, YYYY h:mm A');

module.exports = formatDate;
