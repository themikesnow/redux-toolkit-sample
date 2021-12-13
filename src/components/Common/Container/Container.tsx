import React from 'react';



interface ContainerProps {
  children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="
      p-10
      dark:bg-gray-800
      grid
      grid-cols-1
      gap-6
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      justify-center
      min-h-screen
      grid-rows-3
    ">
      {children}
    </div>
  );
}

export default Container;
