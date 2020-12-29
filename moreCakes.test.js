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
      beforeEach(async () => {
        mixTogether.mockResolvedValue('OK');
      });

      it('should respond with an object with that has a status of Success', async () => {
        const result = await createMoreCakes(mockInstructions, mockChocolate, mockSecretSauce);

        expect(result).toEqual(
          expect.objectContaining({ status: expect.stringContaining('success') })
        );
      });
    });

    describe('When the ingredients are NOT successfully mixed together', () => {
      beforeEach(async () => {
        mixTogether.mockResolvedValue({ errorMessage: 'ERROR' });
      });

      it('should respond with an object with that has a status of Success', async () => {
        const result = await createMoreCakes(mockInstructions, mockChocolate, mockSecretSauce);

        expect(result).toEqual(
          expect.objectContaining({ status: expect.stringContaining('failed') })
        );
      });
    });

    describe('When there are multiple secret sauces', () => {
      const mockMultipleSecretSauce = ['mockSauceOne', 'mockSauceTwo', 'mockSauceThree'];

      beforeEach(async () => {
        mixTogether.mockResolvedValue('OK');
      });

      it('should respond with an object that has a status of Success', async () => {
        const result = await createMoreCakes(
          mockInstructions,
          mockChocolate,
          mockMultipleSecretSauce
        );

        expect(result).toEqual(
          expect.objectContaining({ status: expect.stringContaining('success') })
        );
      });
    });
  });
});
