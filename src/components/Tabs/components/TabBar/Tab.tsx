interface ITabProps {
  title: string;
  children: React.ReactNode;
}

export const Tab: React.FC<ITabProps> = ({ children }) => {
  return <div>{children}</div>;
};
