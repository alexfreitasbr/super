import { SigninPopup } from "@/app/components/signin-popup";

export default function SigninPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" data-testid="signin-page">
      <SigninPopup  />
    </main>
  );
}
