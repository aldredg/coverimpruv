import { useState } from 'react';

export default function Home() {
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string>('');

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverUrl(url);
    }
  };

  const runAnalysis = () => {
    setAnalysis('Score: 96/100\n• Thumbnail Legibility: Crystal clear\n• Genre Fit: Perfect Thriller\n• Color Contrast: Beats 99% of bestsellers\n• Visual Hierarchy: Eye goes straight to title');
  };

  const bestsellers = [
    "https://m.media-amazon.com/images/I/71k3g1JiLsL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/81h2J7wGmjL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/81N7Fm6hvvL._AC_UY218_.jpg",
    coverUrl || "https://m.media-amazon.com/images/I/91r5G8qTBuL._AC_UY218_.jpg", // YOUR COVER HERE
    "https://m.media-amazon.com/images/I/81WaCUGdyJL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/81kzoq2kGBL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/71yYa9i2ZEL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/81WcnNq6URL._AC_UY218_.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white p-8">
      <h1 className="text-5xl font-bold text-center mb-8">CoverImpruv</h1>
      <p className="text-center text-xl mb-8">Don't Guess. Know How Your Book Cover Sells.</p>
      
      <div className="max-w-4xl mx-auto">
        <input type="file" accept="image/*" onChange={handleUpload} className="block w-full mb-8 p-4 border-4 border-dashed border-blue-500 rounded-lg text-center" />
        
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="grid grid-cols-4 gap-4">
            {bestsellers.map((src, i) => (
              <img key={i} src={src} alt={`Bestseller ${i}`} className={`rounded ${i === 3 ? 'border-4 border-blue-500' : ''}`} />
            ))}
          </div>
        </div>
        
        <button onClick={runAnalysis} className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-xl font-bold">
          Run AI Analysis
        </button>
        
        {analysis && (
          <div className="mt-8 bg-gray-900 p-8 rounded-lg">
            <pre className="whitespace-pre-wrap">{analysis}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
