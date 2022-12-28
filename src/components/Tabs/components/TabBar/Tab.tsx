interface I_TabProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

export const Tab: React.FC<I_TabProps> = ({ children }) => {
  return <div>{children}</div>;
};
