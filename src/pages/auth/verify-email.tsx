import { useState } from "react";
import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { PinInput } from "@/components/base/input/pin-input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { NimbusLogo } from "@/components/foundations/logo/nimbus-logo";

/**
 * Centered "Check your email" verification screen in the Nimbus style.
 * A mail FeaturedIcon, heading, supporting text, a 4-digit PIN code input,
 * a full-width "Verify email" button, a "Resend" action, and a
 * "Back to log in" link.
 */
export const VerifyEmailPage = () => {
    const [code, setCode] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
            <div className="flex w-full max-w-90 flex-col gap-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <NimbusLogo className="h-8" />

                    <FeaturedIcon icon={Mail01} color="gray" theme="modern" size="xl" />

                    <div className="flex flex-col gap-2">
                        <h1 className="text-display-xs font-semibold text-primary">Check your email</h1>
                        <p className="text-md text-tertiary">
                            We sent a verification code to your inbox. Enter the code below to confirm your email address.
                        </p>
                    </div>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <PinInput size="xs" className="items-center">
                        <PinInput.Label className="sr-only">Verification code</PinInput.Label>
                        <PinInput.Group maxLength={4} value={code} onChange={setCode}>
                            <PinInput.Slot index={0} />
                            <PinInput.Slot index={1} />
                            <PinInput.Slot index={2} />
                            <PinInput.Slot index={3} />
                        </PinInput.Group>
                    </PinInput>

                    <Button type="submit" size="lg" className="w-full">
                        Verify email
                    </Button>
                </form>

                <div className="flex justify-center gap-1 text-sm text-tertiary">
                    <span>Didn&apos;t receive the email?</span>
                    <Button href="#" color="link-color" size="sm">
                        Resend
                    </Button>
                </div>

                <div className="flex justify-center">
                    <Button href="#" color="link-gray" size="sm" iconLeading={ArrowLeft}>
                        Back to log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmailPage;
