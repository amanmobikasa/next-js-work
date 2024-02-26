'use client';

import React from 'react'
import { Footer } from 'flowbite-react';
import Link from 'next/link';

const FooterComp=()=> {
  return (
    <Footer container>
      <Footer.Copyright href="/" by="Job Post" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link as={Link} href="/"></Footer.Link>
        <Footer.Link as={Link} href="/">Privacy Policy</Footer.Link>
        <Footer.Link as={Link} href="/">Licensing</Footer.Link>
        <Footer.Link as={Link} href="/">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
export default FooterComp;
