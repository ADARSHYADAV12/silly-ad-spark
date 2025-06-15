
import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InputSectionProps {
  onGenerate: (formData: any) => void;
  isGenerating: boolean;
}

const InputSection = ({ onGenerate, isGenerating }: InputSectionProps) => {
  const [productImage, setProductImage] = useState<File | null>(null);
  const [logoImage, setLogoImage] = useState<File | null>(null);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('cartoon');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      productImage,
      logoImage,
      productName,
      description,
      style
    };
    onGenerate(formData);
  };

  const handleFileUpload = (file: File, type: 'product' | 'logo') => {
    if (type === 'product') {
      setProductImage(file);
    } else {
      setLogoImage(file);
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-900 flex items-center justify-center space-x-2">
          <Sparkles className="w-6 h-6 text-yellow-500" />
          <span>Create Your Silly Ad</span>
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Uploads */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Image Upload */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Product Image *
              </label>
              <div className="relative group">
                <label className="cursor-pointer">
                  <div className="border-2 border-dashed border-teal-300 rounded-xl p-6 text-center hover:border-teal-400 transition-colors bg-teal-50/50">
                    <Upload className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Click to upload product image</p>
                    <p className="text-xs text-gray-500">JPG, PNG up to 10MB</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'product')}
                    className="hidden"
                  />
                </label>
                {productImage && (
                  <p className="text-xs text-green-600 mt-1">✓ {productImage.name}</p>
                )}
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  The more boring, the funnier! 😄
                </div>
              </div>
            </div>

            {/* Logo Upload */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Brand Logo (Optional)
              </label>
              <div className="relative">
                <label className="cursor-pointer">
                  <div className="border-2 border-dashed border-yellow-300 rounded-xl p-6 text-center hover:border-yellow-400 transition-colors bg-yellow-50/50">
                    <ImageIcon className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Upload your logo</p>
                    <p className="text-xs text-gray-500">PNG preferred</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 'logo')}
                    className="hidden"
                  />
                </label>
                {logoImage && (
                  <p className="text-xs text-green-600 mt-1">✓ {logoImage.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* Text Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Product Name *
              </label>
              <Input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="e.g., Magic Soap, Super Coffee"
                className="border-2 border-teal-200 focus:border-teal-400"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-2 border-2 border-teal-200 rounded-md focus:border-teal-400 focus:outline-none"
              >
                <option value="cartoon">🎨 Cartoon</option>
                <option value="retro">📻 Retro</option>
                <option value="random">🎲 Random (Surprise Me!)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Short Description / Tagline
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us what your product does in a few words... We'll make it ridiculous!"
              className="border-2 border-teal-200 focus:border-teal-400 min-h-[100px]"
              rows={3}
            />
          </div>

          {/* Generate Button */}
          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={isGenerating || !productImage || !productName}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isGenerating ? (
                <span className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Cooking your ad...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <span>💥 Let's Get Weird!</span>
                </span>
              )}
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              We'll cook up something ridiculous you'll love. 🧀
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InputSection;
