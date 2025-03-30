type Props = {
  children: React.ReactNode;
};

export const TypographyH4: React.FC<Props> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};
