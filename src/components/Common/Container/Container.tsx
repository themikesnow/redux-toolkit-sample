import classnames from 'classnames';



interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }: ContainerProps) => {
  return (
    <div className={classnames(`
        p-10
        dark:bg-gray-800
        justify-center
        min-h-screen
      `,
      {
        [className]: !!className,
        [`grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        grid-rows-3`]: !className,
      }
    )}>
      {children}
    </div>
  );
}

export default Container;
