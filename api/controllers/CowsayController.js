/**
 * CowsayController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var cowsay = require('cowsay');

module.exports = {
  /**
   * `CowsayController.say()`
   */
  say: async function (req, res) {
    return res.view('cowsay', { cow: cowsay.say({
      f: process.env.COW || 'stegausorus',
      text : 'Un bien triste tp noté',
      e : 'oO',
      T : 'U '
    })});
  }
};

