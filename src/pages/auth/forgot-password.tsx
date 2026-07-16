import { useState } from "react";
import { ArrowLeft, Key01, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { NimbusLogo } from "@/components/foundations/logo/nimbus-logo";

/**
 * Centered "Forgot password?" screen in the Nimbus style.
 * A key FeaturedIcon, heading, supporting text, an email field, a full-width
 * "Reset password" button, and a "Back to log in" link.
 */
export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
            <div className="flex w-full max-w-90 flex-col gap-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <NimbusLogo className="h-8" />

                    <FeaturedIcon icon={Key01} color="gray" theme="modern" size="xl" />

                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary">Forgot password?</h1>
                        <p className="text-md text-tertiary">No worries, we&apos;ll send you reset instructions.</p>
                    </div>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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

                    <Button type="submit" size="lg" className="w-full">
                        Reset password
                    </Button>
                </form>

                <div className="flex justify-center">
                    <Button href="#" color="link-gray" size="sm" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
