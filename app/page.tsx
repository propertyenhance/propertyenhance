export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
          PropertyEnhance.co.za
        </h1>
        <p className="text-xl mb-12 opacity-90">AI-powered real estate photo enhancement</p>
        
        <div className="bg-gray-900/50 backdrop-blur-xl p-12 rounded-3xl border border-gray-800 shadow-2xl">
          <input 
            type="file" 
            multiple 
            accept="image/*"
            className="w-full p-6 border-2 border-dashed border-lime-500 rounded-2xl bg-gray-950/50 text-lg file:mr-4 file:py-3 file:px-8 file:rounded-xl file:border-0 file:text-lg file:font-semibold file:bg-lime-500 file:text-black hover:file:bg-lime-400 cursor-pointer transition-all duration-300"
          />
          <p className="mt-4 text-sm opacity-75">Upload JPEG, PNG, or RAW files (up to 50MB each)</p>
        </div>
        
        <div className="mt-12 space-y-3 text-sm opacity-75">
          <p>✓ Fixes verticals, replaces boring skies, color correction</p>
          <p>✓ HDR bracketed exposures (select multiple → 1 credit)</p>
          <p>✓ Real-time processing with your credits</p>
        </div>
      </div>
    </main>
  );
}
