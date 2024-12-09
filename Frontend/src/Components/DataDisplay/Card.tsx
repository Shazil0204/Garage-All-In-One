interface CardProp {
  image: string;
  title: string;
  description: string;
  quantity: number;
}

const Card: React.FC<CardProp> = ({ image, title, description, quantity }) => {
  return (
    <>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border-2 border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-2 cursor-pointer">
        <div className="h-48">
          <img
            src={image}
            alt="Card image"
            className="w-full h-full object-contain p-2"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-gray-700 font-medium">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
