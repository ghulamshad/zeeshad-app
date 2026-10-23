'use client';

import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type SiteChromeProps = {
  children: React.ReactNode;
  showAnnouncement?: boolean;
};

export default function SiteChrome({ children, showAnnouncement = true }: SiteChromeProps) {
  return (
    <>
      {showAnnouncement ? <AnnouncementBar /> : null}
      <Header />
      {children}
      <Footer />
    </>
  );
}
