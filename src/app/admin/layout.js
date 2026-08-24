export const metadata = {
  title: {
    default: "HotelShivGanga CMS",
    template: "%s | HotelShivGanga CMS",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({ children }) {
  return <>{children}</>;
}
