import React, { createContext, useContext } from "react";

interface TabsContextValue {
  value: string;
}

const TabsContext = createContext<TabsContextValue>({ value: "" });

interface TabsProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ value, className, children }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export function TabsList({ className, children }: TabsListProps) {
  return <div className={className}>{children}</div>;
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

export function TabsTrigger({
  value,
  className,
  children,
  asChild,
}: TabsTriggerProps) {
  const { value: activeValue } = useContext(TabsContext);
  const isActive = activeValue === value;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
      {
        className: `${
          (children as React.ReactElement<React.HTMLAttributes<HTMLElement>>)
            .props.className ?? ""
        } ${className ?? ""} ${
          isActive ? "data-active bg-white text-gray-900 shadow-sm" : ""
        }`.trim(),
      },
    );
  }

  return (
    <button
      className={`${className ?? ""} ${
        isActive ? "bg-white text-gray-900 shadow-sm" : ""
      }`.trim()}
    >
      {children}
    </button>
  );
}
