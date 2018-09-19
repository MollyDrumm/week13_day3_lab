const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new Request(this.url);
}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('ListFormView:list-item', (event) => {
    const newListItem = event.detail;
    this.postListItem(newListItem);
  })
}

BucketList.prototype.postListItem = function (newListItem) {
  console.log(newListItem);
  this.request.post(newListItem)
    .then((list) => {
      PubSub.publish('BucketList:data-ready', list);
    })
    .catch(console.error);
};

BucketList.prototype.getData = function () {
  this.request.get()
  .then((list) => {
    console.log(list);
  })
}

module.exports = BucketList;
