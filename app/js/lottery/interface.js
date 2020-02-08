import $ from 'jquery';

export default class Interface {
  getOmit (issue) {
    let self = this;
    return new Promise((resolve, reject => {
      $ajax({
        url: '/get/omit',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOmit(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      })
    }));
  }

  gitOpenCode (issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $ajax({
        url: '/get/pencode',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err)
        }
      })
    });
  }

  gitState (issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $ajax({
        url: '/get/state',
        data: {
          issue: issue
        },
        dataType: 'json',
        success: function (res) {
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err)
        }
      })
    });
  }
}