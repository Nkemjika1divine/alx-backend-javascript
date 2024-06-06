const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should spy on the add function', () => {
    const stub = sinon.stub(Utils, 'calculateNumber')
    stub.returns(10)
    const Ethan = sinon.spy(console, 'log')

    sendPaymentRequestToApi(100, 20)
    sinon.assert.calledWith(stub, 'SUM', 100, 20)
    sinon.assert.calledWith(Ethan, 'The total is: 10');
    stub.restore()
    Ethan.restore()
  })
})