import React from "react";

const LayoutDemo: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      {/* Flexbox Layout */}
      <section>
        <h2 className="text-xl font-bold mb-4">Flexbox Layout</h2>
        <div className="flex flex-row justify-around items-center border border-gray-300 p-4">
          <div className="w-16 h-16 bg-blue-500 flex items-center justify-center">1</div>
          <div className="w-16 h-16 bg-green-500 flex items-center justify-center">2</div>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center">3</div>
        </div>
      </section>

      {/* Grid Layout */}
      <section>
        <h2 className="text-xl font-bold mb-4">Grid Layout</h2>
        <div className="grid grid-cols-3 gap-4 border border-gray-300 p-4">
          <div className="h-16 bg-blue-500 flex items-center justify-center">1</div>
          <div className="h-16 bg-green-500 flex items-center justify-center">2</div>
          <div className="h-16 bg-red-500 flex items-center justify-center">3</div>
        </div>
      </section>

      {/* Positioning */}
      <section className="relative h-40 border border-gray-300">
        <h2 className="text-xl font-bold mb-4">Positioning</h2>
        <div className="absolute top-2 left-2 bg-blue-500 text-white px-4 py-2">Absolute</div>
        <div className="relative bg-green-500 text-white px-4 py-2 top-8">Relative</div>
        <div className="fixed bottom-0 left-4 bg-red-500 text-white px-4 py-2">
          Fixed (Scroll to see me stay!)
        </div>
      </section>

      {/* Float Layout */}
      <section>
        <h2 className="text-xl font-bold mb-4">Float Layout</h2>
        <div className="clearfix border border-gray-300 p-4">
          <div className="float-left w-1/3 bg-blue-500 text-white p-4">Left Float</div>
          <div className="float-right w-1/3 bg-red-500 text-white p-4">Right Float</div>
        </div>
      </section>

      {/* Inline and Block */}
      <section>
        <h2 className="text-xl font-bold mb-4">Inline and Block</h2>
        <div className="border border-gray-300 p-4">
          <span className="inline-block bg-blue-500 text-white px-4 py-2 mr-2">Inline Block</span>
          <span className="inline bg-green-500 text-white px-4 py-2">Inline</span>
        </div>
      </section>

      {/* Multi-column Layout */}
      <section>
        <h2 className="text-xl font-bold mb-4">Multi-column Layout</h2>
        <div
          className="border border-gray-300 p-4"
          style={{ columnCount: 3, columnGap: "1rem" }}
        >
          <p className="bg-blue-500 text-white p-2 mb-2">Column 1</p>
          <p className="bg-green-500 text-white p-2 mb-2">Column 2</p>
          <p className="bg-red-500 text-white p-2 mb-2">Column 3</p>
        </div>
      </section>
    </div>
  );
};

export default LayoutDemo;
