const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should spy on the addition', () => {
    const Ethan = sinon.spy(Utils, 'calculateNumber')

    sendPaymentRequestToApi(100, 20)
    sinon.assert.calledWith(Ethan, 'SUM', 100, 20)
    sinon.assert.calledOnce(Ethan)
    Ethan.restore()
  })
})