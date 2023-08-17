import ProductCards from './ProductCards';

const getRandomDescription = () => {
  const descriptions = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const generateRandomCards = (count) => {
  const cards = [];
  for (let i = 1; i <= count; i++) {
    cards.push({ title: `Card ${i}`, description: getRandomDescription() });
  }
  return cards;
};

const RetrievingProducts = () => {
  const randomCards = generateRandomCards(20);

  return (
    <div>
      <ProductCards cards={randomCards} />
    </div>
  );
};

export default RetrievingProducts;
