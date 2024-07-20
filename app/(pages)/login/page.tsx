import { LoginPopup } from "@/app/components/login-popup";

export default function LoginPage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" data-testid="login-page">
      <LoginPopup />
    </main>
  );
}
