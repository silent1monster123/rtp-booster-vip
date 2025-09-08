import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [username, setUsername] = useState('');
  const [selectedGame, setSelectedGame] = useState('gates-of-olympus');
  const [selectedMultipliers, setSelectedMultipliers] = useState<number[]>([]);
  const [freeSpinEnabled, setFreeSpinEnabled] = useState(false);
  const [doubleChanceEnabled, setDoubleChanceEnabled] = useState(false);
  const [antiBannedEnabled, setAntiBannedEnabled] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStep, setConnectionStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const games = [
    { value: 'gates-of-olympus', name: 'Gates of Olympus', banner: '/api/placeholder/800/300' },
    { value: 'sweet-bonanza', name: 'Sweet Bonanza', banner: '/api/placeholder/800/300' },
    { value: 'starlight-princess', name: 'Starlight Princess', banner: '/api/placeholder/800/300' },
    { value: 'mahjong-wins-3-black-scatter', name: 'Mahjong Wins 3 Black Scatter', banner: '/api/placeholder/800/300' },
    { value: 'gates-of-gatot-kaca', name: 'Gates of Gatot Kaca', banner: '/api/placeholder/800/300' },
  ];

  const multipliers = [
    [10, 20, 25, 50],
    [100, 250, 500, 1000]
  ];

  const selectedGameData = games.find(game => game.value === selectedGame);

  const connectionSteps = [
    "🔐 Authenticating user credentials...",
    "🌐 Establishing secure connection...",
    "🎮 Connecting to Pragmatic Play servers...",
    "⚡ Validating game access permissions...",
    "🔧 Configuring premium features...",
    "🎯 Injecting multiplier settings...",
    "✅ Connection established successfully!"
  ];

  const handleMultiplierToggle = (multiplier: number) => {
    setSelectedMultipliers(prev => 
      prev.includes(multiplier) 
        ? prev.filter(m => m !== multiplier)
        : [...prev, multiplier]
    );
  };

  const handleInject = () => {
    setIsConnecting(true);
    setConnectionStep(0);
    setProgress(0);

    // Simulate realistic connection process
    const stepInterval = setInterval(() => {
      setConnectionStep(prev => {
        const nextStep = prev + 1;
        setProgress((nextStep / connectionSteps.length) * 100);
        
        if (nextStep >= connectionSteps.length) {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsConnecting(false);
            setConnectionStep(0);
            setProgress(0);
            toast({
              title: "🚀 INJEKSI BERHASIL!",
              description: `Fitur premium berhasil diaktifkan untuk ${username}. Perkalian: ${selectedMultipliers.join('x, ')}x telah dikonfigurasi.`,
              duration: 5000,
            });
          }, 1000);
        }
        
        return nextStep;
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-primary/5 text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* Logo Provider */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-2xl border border-primary/30 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
            <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground drop-shadow-lg">
              PRAGMATIC PLAY
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Server Title */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-xl border-2 border-primary/50 bg-card/80 backdrop-blur-sm shadow-xl">
            🎮 SERVER PRAGMATIC 1 🎮
          </h1>
          <div className="mt-3 text-sm sm:text-base text-muted-foreground">
            ⚡ HIGH PERFORMANCE GAMING SERVER ⚡
          </div>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Username Validation */}
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-t-xl font-bold text-sm sm:text-base shadow-lg">
              🔐 VALIDASI USERNAME
            </div>
            <div className="bg-gradient-to-b from-card to-card/80 p-4 sm:p-6 rounded-b-xl border-2 border-primary/30 shadow-xl backdrop-blur-sm">
              <Input 
                placeholder="Masukan username anda"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background/50 border-2 border-primary/50 text-foreground placeholder:text-muted-foreground h-12 sm:h-14 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-sm sm:text-base"
              />
              <div className="mt-3 flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Secure Connection Active</span>
              </div>
            </div>
          </div>

          {/* Game Selection */}
          <div className="max-w-md mx-auto">
            <label className="block text-primary font-bold mb-4 text-sm sm:text-base text-center">
              🎯 PILIHAN PERMAINAN
            </label>
            <div className="relative">
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger className="bg-gradient-to-r from-card to-card/80 border-2 border-primary/50 text-foreground h-12 sm:h-14 rounded-lg hover:border-primary transition-all duration-300 shadow-lg">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-2 border-primary/50 rounded-lg shadow-2xl">
                  {games.map(game => (
                    <SelectItem 
                      key={game.value} 
                      value={game.value} 
                      className="text-foreground hover:bg-primary/20 focus:bg-primary/30 cursor-pointer transition-colors duration-200 py-3"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{game.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Multipliers */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-primary font-bold mb-6 sm:mb-8 text-center text-lg sm:text-xl">
              ⚡ PILIH PERKALIAN KEBERUNTUNGAN ⚡
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {multipliers.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap justify-center gap-3 sm:gap-6">
                  {row.map(multiplier => (
                    <div key={multiplier} className="group">
                      <div className={`flex items-center space-x-3 p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                        selectedMultipliers.includes(multiplier) 
                          ? 'bg-gradient-to-r from-primary/30 to-primary/20 border-primary shadow-lg shadow-primary/25' 
                          : 'bg-card/50 border-border hover:border-primary/50 hover:bg-card/80'
                      }`}>
                        <Checkbox
                          id={`mult-${multiplier}`}
                          checked={selectedMultipliers.includes(multiplier)}
                          onCheckedChange={() => handleMultiplierToggle(multiplier)}
                          className="data-[state=checked]:bg-primary border-primary w-5 h-5"
                        />
                        <label 
                          htmlFor={`mult-${multiplier}`}
                          className="text-foreground font-bold cursor-pointer text-sm sm:text-lg group-hover:text-primary transition-colors duration-200"
                        >
                          {multiplier}x
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-orange-400 font-bold text-lg sm:text-xl">🛠️ FITUR PREMIUM 🛠️</h3>
            </div>

            <div className={`flex items-center justify-between p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
              freeSpinEnabled 
                ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400 shadow-lg shadow-green-500/25' 
                : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-600'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-sm sm:text-base">🎁 SPIN GRATIS 50X</span>
              </div>
              <Switch 
                checked={freeSpinEnabled}
                onCheckedChange={setFreeSpinEnabled}
                className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500 scale-110"
              />
            </div>
            
            <div className={`flex items-center justify-between p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
              doubleChanceEnabled 
                ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400 shadow-lg shadow-blue-500/25' 
                : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-600'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-sm sm:text-base">💫 DOUBLE CHANCE</span>
              </div>
              <Switch 
                checked={doubleChanceEnabled}
                onCheckedChange={setDoubleChanceEnabled}
                className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500 scale-110"
              />
            </div>
            
            <div className={`flex items-center justify-between p-4 sm:p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
              antiBannedEnabled 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400 shadow-lg shadow-purple-500/25' 
                : 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-gray-600'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-white font-bold text-sm sm:text-base">🔒 ANTI BANNED (BETA)</span>
              </div>
              <Switch 
                checked={antiBannedEnabled}
                onCheckedChange={setAntiBannedEnabled}
                className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500 scale-110"
              />
            </div>
          </div>

          {/* Advanced Connection Status */}
          {isConnecting && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-gray-900/95 to-black/95 border-2 border-green-500/50 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-3 text-green-400 font-bold mb-3">
                    <div className="animate-spin w-6 h-6 border-3 border-green-400 border-t-transparent rounded-full"></div>
                    <span className="text-lg">CONNECTING TO SERVER...</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    🌐 Establishing secure connection to Pragmatic Play
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <Progress value={progress} className="h-3 bg-gray-800">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-300 animate-pulse"></div>
                  </Progress>
                  <div className="text-center mt-2 text-green-400 font-bold">
                    {Math.round(progress)}%
                  </div>
                </div>

                {/* Connection Steps */}
                <div className="space-y-3">
                  {connectionSteps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        index < connectionStep 
                          ? 'bg-green-500/20 border border-green-500/40' 
                          : index === connectionStep 
                            ? 'bg-yellow-500/20 border border-yellow-500/40 animate-pulse' 
                            : 'bg-gray-800/50 border border-gray-600/30'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${
                        index < connectionStep 
                          ? 'bg-green-500' 
                          : index === connectionStep 
                            ? 'bg-yellow-500 animate-ping' 
                            : 'bg-gray-500'
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        index <= connectionStep ? 'text-white' : 'text-gray-500'
                      }`}>
                        {step}
                      </span>
                      {index < connectionStep && (
                        <div className="ml-auto text-green-500">✓</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Server Info */}
                <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Server IP</div>
                    <div className="text-green-400 font-mono">192.168.1.100</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Port</div>
                    <div className="text-green-400 font-mono">8443</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Protocol</div>
                    <div className="text-green-400 font-mono">HTTPS/SSL</div>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <div className="text-gray-400">Status</div>
                    <div className="text-green-400 font-mono">SECURE</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Inject Button */}
          <div className="text-center pb-8">
            <Button 
              onClick={handleInject}
              disabled={isConnecting || !username}
              className="bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 hover:from-orange-700 hover:via-orange-600 hover:to-red-700 text-white font-bold py-4 sm:py-6 px-8 sm:px-16 rounded-2xl text-lg sm:text-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-orange-400/50 hover:border-orange-300"
            >
              {isConnecting ? (
                <div className="flex items-center gap-3">
                  <div className="animate-spin w-6 h-6 border-3 border-white border-t-transparent rounded-full"></div>
                  <span>🚀 INJECTING...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span>🚀 INJECT PREMIUM</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              )}
            </Button>
            
            <div className="mt-4 text-xs sm:text-sm text-gray-400">
              ⚡ Instant activation • 🔒 100% secure • 💎 Premium features
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 text-gray-500 text-xs sm:text-sm border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span>⚠️ DISCLAIMER: Jangan Berikan Link Ini Ke Admin</span>
            <span className="hidden sm:inline">•</span>
            <span>🔒 Secure & Protected</span>
            <span className="hidden sm:inline">•</span>
            <span>⚡ High Performance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
