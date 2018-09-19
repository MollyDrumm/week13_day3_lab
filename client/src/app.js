const BucketList = require('./models/bucketlist.js');
const ListFormView = require('./views/list_form_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('javascript loaded');

  const bucketList = new BucketList('http://localhost:3000/api/bucketlist');
  bucketList.bindEvents();
  
  const listFormView = new ListFormView();
  listFormView.bindEvents();
})
