
type Props = {
  children: React.ReactNode;
};
export const TypographyP: React.FC<Props> = ({ children }) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {children}
    </p>
  )
}
