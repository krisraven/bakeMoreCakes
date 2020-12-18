// const mockMixingResponse = require('./mocks/mockMixingResponse');
const { mixTogether } = require('./mixFunction');
const { createMoreCakes } = require('./moreCakes');

jest.mock('./mixFunction');

describe('moreCakes', () => {
  describe('Given a request to bake a cake is received', () => {
    const mockInstructions = 'mockInstructions';
    const mockChocolate = 'mockChocolate';
    const mockSecretSauce = ['mockSauceOne'];

    describe('When the ingredients are successfully mixed together', () => {
      let result;

      beforeEach(async () => {
        mixTogether.mockResolvedValue('OK');
        result = await createMoreCakes(mockInstructions, mockChocolate, mockSecretSauce);
      });

      it('should respond with an object with that has a status of Success', async () => {
        expect(result).toEqual(
          expect.objectContaining({ status: expect.stringContaining('success') })
        );
      });
    });

    describe('When the ingredients are NOT successfully mixed together', () => {
      let result;

      beforeEach(async () => {
        mixTogether.mockResolvedValue({ errorMessage: 'ERROR' });
        result = await createMoreCakes(mockInstructions, mockChocolate, mockSecretSauce);
      });

      it('should respond with an object with that has a status of Success', async () => {
        expect(result).toEqual(
          expect.objectContaining({ status: expect.stringContaining('failed') })
        );
      });
    });

    describe('When there are multiple secret sauces', () => {
      const mockMultipleSecretSauce = ['mockSauceOne', 'mockSauceTwo', 'mockSauceThree'];

      beforeEach(async () => {
        mixTogether.mockResolvedValue('OK');
        result = await createMoreCakes(mockInstructions, mockChocolate, mockMultipleSecretSauce);
      });

      it('should respond with an object that has a status of Success', async () => {
        expect(result).toEqual(
          expect.objectContaining({ status: expect.stringContaining('success') })
        );
      });
    });
  });
});
