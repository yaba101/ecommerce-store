"use client";

import { useEffect, useState } from "react";

export const Priceformatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  price?: number | string;
}

const Currency = ({ price }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="font-semibold">{Priceformatter.format(Number(price))}</div>
  );
};

export default Currency;
