import { useState } from "react";
import { Mail01, User01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { SocialButton } from "@/components/base/buttons/social-button";
import { Input } from "@/components/base/input/input";
import { NimbusLogo } from "@/components/foundations/logo/nimbus-logo";

/**
 * Centered "Sign up" auth screen in the Nimbus style.
 * Logo, heading, supporting text, name + email + password fields (with a
 * password hint), a full-width "Get started" button, a Google social button,
 * and a "Log in" footer link.
 */
export const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
            <div className="flex w-full max-w-90 flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <NimbusLogo className="h-8" />

                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary">Sign up</h1>
                        <p className="text-md text-tertiary">Create your account to get started with Nimbus.</p>
                    </div>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-4">
                        <Input
                            isRequired
                            name="name"
                            label="Name"
                            placeholder="Enter your name"
                            icon={User01}
                            value={name}
                            onChange={setName}
                        />

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
                            placeholder="Create a password"
                            hint="Must be at least 8 characters."
                            value={password}
                            onChange={setPassword}
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg" className="w-full">
                            Get started
                        </Button>
                        <SocialButton social="google" theme="gray" className="w-full">
                            Sign up with Google
                        </SocialButton>
                    </div>
                </form>

                <div className="flex justify-center gap-1 text-sm text-tertiary">
                    <span>Already have an account?</span>
                    <Button href="#" color="link-color" size="sm">
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
