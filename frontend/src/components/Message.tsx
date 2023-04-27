import { Alert } from "react-bootstrap";

type MessageProps = {
  variant?: string;
  children?: any;
};

export function Message({ variant, children }: MessageProps) {
  return <Alert variant={variant}>{children}</Alert>;
}
