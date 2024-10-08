"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    title: "Student Basic",
    monthlyPrice: 5,
    yearlyPrice: 50,
    description:
      "Start exploring professors and courses with essential features.",
    features: [
      "Access professor ratings",
      "Read student reviews",
      "Basic search functionality",
    ],
    actionLabel: "Upgrade Now",
    url: `${process.env.NEXT_PUBLIC_BASIC}`,
  },
  {
    title: "Student Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    description:
      "Perfect for students who want to make informed decisions about their education.",
    features: [
      "AI-powered professor recommendations",
      "Advanced search filters",
      "Priority support",
    ],
    actionLabel: "Upgrade Now",
    popular: true,
    url: `${process.env.NEXT_PUBLIC_PRO}`,
  },
];
type PricingSwitchProps = {
  onSwitch: (value: string) => void;
};

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  url: string;
  popular?: boolean;
  exclusive?: boolean;
};

const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
);

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs
    defaultValue="0"
    className="w-40 mx-auto border rounded-xl"
    onValueChange={onSwitch}
  >
    <TabsList>
      <TabsTrigger value="0" className="text-base">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Yearly
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  url,
  popular,
  exclusive,
}: PricingCardProps) => (
  <Card
    className={cn(
      `w-72 flex flex-col justify-between py-1 ${
        popular ? "border-rose-400" : "border-zinc-700"
      } mx-auto sm:mx-0`,
      {
        "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
          exclusive,
      }
    )}
  >
    <div>
      <CardHeader className="pb-8 pt-4">
        {isYearly && yearlyPrice && monthlyPrice ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
              {title}
            </CardTitle>
            <div
              className={cn(
                "px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white",
                {
                  "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ":
                    popular,
                }
              )}
            >
              Save ${monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
            {title}
          </CardTitle>
        )}
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">
            {yearlyPrice && isYearly
              ? "$" + yearlyPrice
              : monthlyPrice
              ? "$" + monthlyPrice
              : "Custom"}
          </h3>
          <span className="flex flex-col justify-end text-sm mb-1">
            {yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}
          </span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Link
        href={`${url}`}
        className=" relative inline-flex w-full items-center justify-center rounded-xl bg-white dark:bg-black py-2 px-6 font-medium  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border border-black dark:border-white hover:dark:bg-opacity-80"
      >
        <div className="absolute -inset-0.5 -z-10 rounded-xl bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Link>
    </CardFooter>
  </Card>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value: string) => {
    setIsYearly(parseInt(value) === 1);
  };

  return (
    <div className="py-8 mt-10">
      <PricingHeader
        title="Pricing Plans"
        subtitle="Choose the plan that's right for you"
      />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />;
        })}
      </section>
    </div>
  );
}
