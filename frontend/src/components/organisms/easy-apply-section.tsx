import { orelega_one } from "@/lib/fonts";
import ContentWrapper from "./content-wrapper";
import SectionWrapper from "./section-wrapper";
import EasyApplyFileUpload from "./easy-apply-file-upload";
import { cookies } from "next/headers";

export default async function EasyApplySection() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  return (
    <SectionWrapper>
      <ContentWrapper className="bg-wma-gold gap-6 rounded-xl">
        <div className="text-wma-footer inline-flex flex-col gap-2 text-center">
          <h1
            className={`${orelega_one.className} text-4xl md:text-5xl xl:text-6xl`}
          >
            Want to easily apply?
          </h1>
          <p className="font-medium md:text-lg">
            Just send your resume, and we&apos;ll point you to the right
            direction.
          </p>
        </div>
        <EasyApplyFileUpload token={token} />
      </ContentWrapper>
    </SectionWrapper>
  );
}
