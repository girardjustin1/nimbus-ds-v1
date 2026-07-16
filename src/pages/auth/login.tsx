import { useState } from "react";
import { Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Input } from "@/components/base/input/input";
import { NimbusLogo } from "@/components/foundations/logo/nimbus-logo";

/**
 * Centered "Log in" auth screen in the Nimbus style.
 * Logo, heading, supporting text, email + password fields, a "Remember me"
 * checkbox with a "Forgot password" link, a full-width primary sign-in button,
 * a Google social button, and a "Sign up" footer link.
 */
export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
            <div className="flex w-full max-w-90 flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <NimbusLogo className="h-8" />

                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary">Log in</h1>
                        <p className="text-md text-tertiary">Welcome back! Please enter your details.</p>
                    </div>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <Input
                            isRequired
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="you@nimbus.com"
                            icon={Mail01}
                            value={email}
                            onChange={setEmail}
                        />

                        <Input
                            isRequired
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="••••••••"
                            value={password}
                            onChange={setPassword}
                        />
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <Checkbox label="Remember me" isSelected={rememberMe} onChange={setRememberMe} />
                        <Button href="#" color="link-color" size="sm">
                            Forgot password
                        </Button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg" className="w-full">
                            Sign in
                        </Button>
                        <SocialButton social="google" theme="gray" className="w-full">
                            Sign in with Google
                        </SocialButton>
                    </div>
                </form>

                <div className="flex justify-center gap-1 text-sm text-tertiary">
                    <span>Don&apos;t have an account?</span>
                    <Button href="#" color="link-color" size="sm">
                        Sign up
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
