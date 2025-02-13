'use client';

import styles from './dashboard.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/' },
  { name: 'New_page', href: '/new_page' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Customers', href: '/dashboard/customers' },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              {
                [styles.active_link] : pathname === link.href,
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}