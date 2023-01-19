import "./Button.css";

type Props = {
  type: "submit" | "reset" | "button";
  className?: string;
  children: React.ReactNode | string;
  onClick?: (event: React.MouseEvent) => void;
};

export default function Button({ type, className, onClick, children }: Props) {
  return (
    <button type={type} className={`btn ` + className} onClick={onClick}>
      {children}
    </button>
  );
}
