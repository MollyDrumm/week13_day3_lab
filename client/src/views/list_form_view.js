const PubSub = require('../helpers/pub_sub')

const ListFormView = function () {

}

ListFormView.prototype.bindEvents = function () {
  const listItemForm = document.querySelector('#bucketlist-form');
  listItemForm.addEventListener("submit", (event) => {
      this.handleSubmitEvent(event);

  });
}

ListFormView.prototype.handleSubmitEvent = function(event){
  event.preventDefault();
  const newListItem = this.createListItem(event);
  PubSub.publish('ListFormView:list-item', newListItem);
  event.target.reset();

}

ListFormView.prototype.createListItem = function(event){
  const newListItem = {
    item: event.target.list_item.value
  }
  return newListItem;
}

module.exports = ListFormView;
