import React from 'react';



interface ContainerProps {
  children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <div className="
      px-5
      dark:bg-gray-800
      grid
      grid-cols-1
      gap-4
      sm:grid-cols-2
      md:grid-cols-4
      justify-center
      h-screen
    ">
      {children}
    </div>
  );
}

export default Container;
