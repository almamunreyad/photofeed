import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["bn", "en"];
const defaultLocale = "en";

function getLocale(request) {
    const acceptedLanguage = request.headers.get("accept-language") ?? undefined;

    let headers = { "accept-language": acceptedLanguage };
    let languages = new Negotiator({ headers }).languages();

    console.log(languages);

    return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);

        const url = new URL(`/${locale}/${pathname}`, request.url);
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: [
        "/((?!api|assets|.*\\..*|_next).*)",
    ],
};