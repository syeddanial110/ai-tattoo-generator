'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Allowed dimensions for SDXL model
const ALLOWED_DIMENSIONS = [
  { width: 1024, height: 1024, name: 'Square (1024x1024)' },
  { width: 1152, height: 896, name: 'Landscape (1152x896)' },
  { width: 896, height: 1152, name: 'Portrait (896x1152)' },
  { width: 1216, height: 832, name: 'Wide (1216x832)' },
  { width: 832, height: 1216, name: 'Tall (832x1216)' },
  { width: 1344, height: 768, name: 'Extra Wide (1344x768)' },
  { width: 768, height: 1344, name: 'Extra Tall (768x1344)' },
  { width: 1536, height: 640, name: 'Panoramic (1536x640)' },
  { width: 640, height: 1536, name: 'Vertical (640x1536)' },
];

export default function TattooGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [style, setStyle] = useState('realistic');
  const [dimensions, setDimensions] = useState(ALLOWED_DIMENSIONS[0]);

  const tattooStyles = [
    { id: 'realistic', name: 'Realistic' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'watercolor', name: 'Watercolor' },
    { id: 'tribal', name: 'Tribal' },
    { id: 'geometric', name: 'Geometric' },
    { id: 'blackwork', name: 'Blackwork' },
  ];

  const generateTattoo = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const fullPrompt = `${prompt}, ${style} tattoo style, high quality, detailed, professional tattoo design`;
      
      const response = await fetch(
        'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-7SUvd7bJmMd5kx9nfV4CtShfAKh2W7qFrhlCtj27noeqa9dY`,
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            text_prompts: [
              {
                text: fullPrompt,
                weight: 1
              },
              {
                text: "blurry, low quality, text, watermark, signature",
                weight: -1
              }
            ],
            cfg_scale: 7,
            height: dimensions.height,
            width: dimensions.width,
            steps: 30,
            samples: 1,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate image');
      }

      const data = await response.json();
      const imageBase64 = data.artifacts[0].base64;
      setGeneratedImage(`data:image/png;base64,${imageBase64}`);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `tattoo-design-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>AI Tattoo Generator</title>
        <meta name="description" content="Generate custom tattoo designs with AI" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Tattoo Generator
            </h1>
            <p className="text-gray-300">
              Create your perfect tattoo design with artificial intelligence
            </p>
          </motion.div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-6">
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
                Describe your tattoo idea
              </label>
              <textarea
                id="prompt"
                rows={3}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g. A dragon wrapped around a rose with tribal patterns"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tattoo Style
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {tattooStyles.map((tattooStyle) => (
                    <button
                      key={tattooStyle.id}
                      className={`px-3 py-2 rounded-lg text-sm ${
                        style === tattooStyle.id 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                      onClick={() => setStyle(tattooStyle.id)}
                    >
                      {tattooStyle.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Image Dimensions
                </label>
                <select
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
                  value={`${dimensions.width}x${dimensions.height}`}
                  onChange={(e) => {
                    const [width, height] = e.target.value.split('x').map(Number);
                    setDimensions(ALLOWED_DIMENSIONS.find(d => d.width === width && d.height === height));
                  }}
                >
                  {ALLOWED_DIMENSIONS.map((dim) => (
                    <option key={`${dim.width}x${dim.height}`} value={`${dim.width}x${dim.height}`}>
                      {dim.name} ({dim.width}x{dim.height})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={generateTattoo}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium ${
                isLoading ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'
              } text-white transition-colors flex items-center justify-center`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                'Generate Tattoo Design'
              )}
            </button>

            {error && (
              <div className="mt-4 p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                {error}
              </div>
            )}
          </div>

          {generatedImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4 text-center">Your Generated Tattoo</h2>
              <div className="flex justify-center mb-4">
                <img 
                  src={generatedImage} 
                  alt="Generated tattoo design" 
                  className="max-w-full h-auto rounded-lg border border-gray-700"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={downloadImage}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white"
                >
                  Download Design
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white"
                >
                  Print for Consultation
                </button>
              </div>
            </motion.div>
          )}

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>Note: AI-generated designs are for inspiration only. Our artists will work with you to create a custom design.</p>
          </div>
        </div>
      </main>
    </div>
  );
}