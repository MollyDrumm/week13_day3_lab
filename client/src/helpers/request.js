const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

Request.prototype.post = function (payload) {
  console.log("payload" + payload);
  console.log("payload json" + JSON.stringify(payload));
  console.log(this.url)
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors'
  })
    .then((response) => {
      // console.log("response");
      console.log(response.json());
      return response.json();
    })
};

Request.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};

module.exports = Request;
