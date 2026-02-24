"use client";

import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";

const LinkBehavior = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehavior(props, ref) {
    return <Link ref={ref} {...props} />;
  },
);

export default LinkBehavior;
