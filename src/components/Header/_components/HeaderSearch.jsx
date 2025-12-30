"use client";
import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeaderSearch({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search dialog"
    >
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header with Search title and close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <Search className="w-6 h-6 text-orange-500 mr-3" />
            <span className="text-xl font-normal text-gray-900 tracking-wide">
              Search
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type to search..."
            className="w-full px-4 py-4 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg transition-all duration-300 bg-transparent border border-gray-200 focus:border-orange-500"
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                onClose();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

