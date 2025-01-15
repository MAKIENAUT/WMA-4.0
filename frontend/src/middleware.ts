import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const serviceTypes = [
  "study-and-exchange",
  "web-development",
  "family-based",
  "temporary-employment",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isServicesFormPath = path.match(/^\/services\/[\w-]+\/form$/);
  const serviceType = path.split("/")[2];
  const isValidServicePath = serviceTypes.includes(serviceType);

  const cookie = (await cookies()).get("token")?.value;

  if (isServicesFormPath && isValidServicePath && !cookie) {
    const redirectURL = new URL("/login", req.nextUrl);
    redirectURL.searchParams.set("callbackURL", path);
    return NextResponse.redirect(redirectURL);
  }

  if ((path === "/login" || path === "/signup") && cookie) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:type/form", "/login", "/signup"],
};
