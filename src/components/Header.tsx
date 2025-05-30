import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Settings, RefreshCw } from "lucide-react";
import SettingsDialog from "@/components/SettingsDialog";
import AnimatedLogo from "@/components/AnimatedLogo";

interface HeaderProps {
  onAddPrompt: () => void;
  onRefreshPrompts: () => void;
  isRefreshing: boolean;
}

const Header: React.FC<HeaderProps> = ({ onAddPrompt, onRefreshPrompts, isRefreshing }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
      <div className="flex items-center gap-2">
        <AnimatedLogo />
        <h1 className="text-2xl sm:text-3xl font-bold">Promptzy</h1>
      </div>
      <div className="flex gap-2 w-full sm:w-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={onRefreshPrompts}
          disabled={isRefreshing}
          className="flex items-center gap-1 flex-1 sm:flex-none"
        >
          <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span className="hidden xs:inline">{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsSettingsOpen(true)}
          className="flex items-center gap-1 flex-1 sm:flex-none"
        >
          <Settings className="h-4 w-4" />
          <span className="hidden xs:inline">Settings</span>
        </Button>
        <Button
          onClick={onAddPrompt}
          className="bg-purple-600 hover:bg-purple-700 flex items-center gap-1 flex-1 sm:flex-none"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden xs:inline">Add Prompt</span>
        </Button>
      </div>

      <SettingsDialog
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </header>
  );
};

export default Header;
