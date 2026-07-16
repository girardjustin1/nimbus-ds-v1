import type { ImgHTMLAttributes } from "react";
import { cx } from "@/utils/cx";
import nimbusBlue from "./nimbus-blue.svg";
import nimbusWhite from "./nimbus-white.svg";

type NimbusLogoProps = {
    /** "blue" for light backgrounds, "white" for dark backgrounds. */
    variant?: "blue" | "white";
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;

/**
 * The Nimbus wordmark. Uses the brand SVG assets as-is.
 * - `blue`  → the teal wordmark (use on light surfaces)
 * - `white` → the white wordmark (use on dark surfaces, e.g. the footer)
 */
export const NimbusLogo = ({ variant = "blue", className, ...props }: NimbusLogoProps) => (
    <img
        src={variant === "white" ? nimbusWhite : nimbusBlue}
        alt="Nimbus"
        className={cx("h-7 w-auto", className)}
        {...props}
    />
);
