const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
var utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
const Thought = require('../models/Thought');

const formatDate = (date) => {
  //?? Should the day of the week be left out? - delete 'dddd' from below to do so
  // const date = Thought.createdAt;
  return dayjs(date).format('dddd, MMMM D, YYYY [at] h:mm A');
};

function dateGetter() {
  const date = this.default;
  formatDate(date);
}

module.exports = { formatDate, dateGetter };
const thotCheck = (thought, message) =>
  !thought
    ? res.status(404).json({ message: message })
    : res.status(200).json(thought);
