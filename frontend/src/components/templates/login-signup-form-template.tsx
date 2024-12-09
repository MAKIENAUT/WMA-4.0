import LoginForm from "../organisms/login-form";
import SignupForm from "../organisms/signup-form";

export default function LoginSignupFormTemplate({
  variant,
}: {
  variant: "login" | "signup";
}) {
  return (
    <section className="w-full px-4">
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-8 rounded-lg bg-white p-8">
        {variant === "login" ? (
          <LoginForm variant={variant} />
        ) : (
          <SignupForm variant={variant} />
        )}
      </div>
    </section>
  );
}
