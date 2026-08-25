export const metadata = {
  title: {
    default: "Hotel Kedar Heaven CMS",
    template: "%s | Hotel Kedar Heaven CMS",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({ children }) {
  return <>{children}</>;
}
