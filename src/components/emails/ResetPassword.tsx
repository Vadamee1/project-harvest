import { Button, Html } from "@react-email/components";

export default function ResetPasswordEmail() {
  return (
    <Html>
      <Button
        href="https://react.email/docs/introduction"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
    </Html>
  );
}
