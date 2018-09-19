const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {

}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('ListFormView:list-item', (event) => {
    const newListItem = event.detail;
  })
}

module.exports = BucketList;
