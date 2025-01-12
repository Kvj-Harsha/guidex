import React from 'react';

const TypographyGuide: React.FC = () => {
  return (
    <div className="p-8 min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-6">Typography Guide</h1>

      <div className="space-y-12">
        {/* Heading Styles */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Headings</h2>
          <div className="space-y-2">
            <h1 className="text-6xl font-bold">Heading 1 (text-6xl)</h1>
            <h2 className="text-5xl font-semibold">Heading 2 (text-5xl)</h2>
            <h3 className="text-4xl font-medium">Heading 3 (text-4xl)</h3>
            <h4 className="text-3xl font-medium">Heading 4 (text-3xl)</h4>
            <h5 className="text-2xl font-medium">Heading 5 (text-2xl)</h5>
            <h6 className="text-xl font-medium">Heading 6 (text-xl)</h6>
          </div>
        </section>

        {/* Paragraph and Text Styles */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Paragraphs & Text</h2>
          <div className="space-y-4">
            <p className="text-base">Base text size (text-base). This is the default paragraph text style.</p>
            <p className="text-lg">Large text (text-lg) for more emphasis.</p>
            <p className="text-sm">Small text (text-sm) for less important details.</p>
            <p className="text-xs">Extra small text (text-xs) for captions or annotations.</p>
          </div>
        </section>

        {/* Other Text Styles */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">Other Styles</h2>
          <div className="space-y-4">
            <p className="italic">Italic text for emphasis or quotes.</p>
            <p className="font-bold">Bold text for strong emphasis.</p>
            <p className="underline">Underlined text for links or special purposes.</p>
            <p className="line-through">Strikethrough text for removed content.</p>
            <p className="uppercase">Uppercase text for headlines or labels.</p>
            <p className="lowercase">Lowercase text for stylistic purposes.</p>
            <p className="capitalize">Capitalized Text for Titles or Headlines.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TypographyGuide;
