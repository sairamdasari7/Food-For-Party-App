
import React, { createContext, useState, useMemo } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const isSelected = (id) => selectedIds.has(id);
  const clearAll = () => setSelectedIds(new Set());

  const value = useMemo(() => ({
    selectedIds,
    toggleSelect,
    isSelected,
    clearAll,
    totalSelected: selectedIds.size
  }), [selectedIds]);

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};
