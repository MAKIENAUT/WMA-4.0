import Link from "next/link";
import { Button } from "../atoms/ui/button";

export default function FooterLink({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  return (
    <Button asChild variant="link-footer" size="none">
      <Link href={url}>{title}</Link>
    </Button>
  );
}
