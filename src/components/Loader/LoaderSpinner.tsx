import "./Loader.css";

type Props = {
  className?: string;
};

export default function LoaderSpinner({ className }: Props) {
  return <div className={`spinner ${className}`}></div>;
}
