import React from "react";

const FlexboxDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-center">Flexbox Layout Demonstration</h1>

      {/* Flexbox Row */}
      <section>
        <h2 className="text-xl font-bold mb-4">Flex Row</h2>
        <div className="flex flex-row justify-around items-center border border-gray-300 p-4">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">3</div>
        </div>
      </section>

      {/* Flexbox Column */}
      <section>
        <h2 className="text-xl font-bold mb-4">Flex Column</h2>
        <div className="flex flex-col justify-center items-center border border-gray-300 p-4 space-y-4">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">3</div>
        </div>
      </section>

      {/* Justify Content Variations */}
      <section>
        <h2 className="text-xl font-bold mb-4">Justify Content</h2>
        <h3>Justify Between</h3>
        <div className="flex flex-row justify-between border border-gray-300 p-4 mb-4">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">3</div>
        </div>
        <h3>Justify Around</h3>
        <div className="flex flex-row justify-around border border-gray-300 p-4">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">3</div>
        </div>
      </section>

      {/* Align Items Variations */}
      <section>
        <h2 className="text-xl font-bold mb-4">Align Items</h2>
        <h3>Items Start</h3>
        <div className="flex flex-row items-start border border-gray-300 p-4 mb-4 h-32">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">3</div>
        </div>
        <h3>Items End</h3>
        <div className="flex flex-row items-end border border-gray-300 p-4 h-32">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center text-white">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center text-white">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white">3</div>
        </div>
      </section> 

      {/* Wrap and No-Wrap */}
      <section>
        <h2 className="text-xl font-bold mb-4">Flex Wrap</h2>
        <div className="flex flex-row flex-wrap border border-gray-300 p-4">
          <div className="w-32 h-16 bg-blue-500 flex items-center justify-center text-white mb-2">1</div>
          <div className="w-32 h-16 bg-green-500 flex items-center justify-center text-white mb-2">2</div>
          <div className="w-32 h-16 bg-red-500 flex items-center justify-center text-white mb-2">3</div>
          <div className="w-32 h-16 bg-yellow-500 flex items-center justify-center text-white mb-2">4</div>
        </div>
      </section>

    </div>
  );
};

export default FlexboxDemo;
