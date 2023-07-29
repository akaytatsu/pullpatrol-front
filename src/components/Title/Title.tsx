interface TitleProps {
  children: React.ReactNode;
}

const Title = (props: TitleProps) => (
  <span className="text-black text-2xl">{props.children}</span>
);

export default Title;
