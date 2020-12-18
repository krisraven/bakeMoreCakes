const { mixTogether } = require('./mixFunction');

const createMoreCakes = async (instructions, chocolateId, secretSauceList) => {
  const ingredients = {
    chocolate: chocolateId,
    secretSauce: secretSauceList,
  };

  for (const sauce of secretSauceList) {
    mixing = await mixTogether(ingredients);
    if (mixing.errorMessage) {
      return { status: 'Cake making has failed' };
    }
    return { status: 'Cake making has been a success' };
  }
};

module.exports = {
  createMoreCakes,
};
