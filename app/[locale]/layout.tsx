import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css"
import Header from '@/modules/Header';
import ReactQueryProvider from '@/query/ReactQueryProvider';
import { GlobalContextProvider } from '@/context/context';
  
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <head>
        <title>Ashyo</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />

      </head>
      <body>
      <NextIntlClientProvider>
          <ReactQueryProvider>
            <GlobalContextProvider>
              <Header />
              {children}
            </GlobalContextProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}