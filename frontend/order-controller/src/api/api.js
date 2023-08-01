const addNormalOrder = () => {
  fetch("http://localhost:8080/api/orders/normal", {
    method: "POST",
  }).catch((err) => {
    console.log(err);
  });
};

const addVipOrder = () => {
  fetch("http://localhost:8080/api/orders/vip", {
    method: "POST",
  }).catch((err) => {
    console.log(err.message);
  });
};

const addBot = () => {
  fetch("http://localhost:8080/api/bots/add", {
    method: "POST",
  }).catch((err) => {
    console.log(err.message);
  });
};

const deleteBot = () => {
  fetch("http://localhost:8080/api/bots/delete", {
    method: "DELETE",
  }).catch((err) => {
    console.log(err.message);
  });
};

module.exports = {
  addNormalOrder,
  addVipOrder,
  addBot,
  deleteBot,
};
