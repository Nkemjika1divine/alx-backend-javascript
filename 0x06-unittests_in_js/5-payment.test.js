const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let Ethan
    beforeEach(() => {
        Ethan = sinon.spy(console, 'log');
      });
    
      afterEach(() => {
        Ethan.restore();
      });

      it('should log 120', () => {
        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledWith(Ethan, 'The total is: 120');
        sinon.assert.calledOnce(Ethan)
      })
      
      it('should log 20', () => {
        sendPaymentRequestToApi(10, 10)
        sinon.assert.calledWith(Ethan, 'The total is: 20');
        sinon.assert.calledOnce(Ethan)
      })
})