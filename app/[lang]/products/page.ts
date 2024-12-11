import { Locale } from "@/i18n-config";

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: PageProps) {
  return;
}
