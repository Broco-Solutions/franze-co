import { siteConfig } from "@/config/site";

export function FranzeHours({ condensed = false }: { condensed?: boolean }) {
  return <ul className={`franze-hours${condensed ? " is-condensed" : ""}`} aria-label="Studio hours">
    {siteConfig.openingHours.map((item) => <li key={item.day}><span>{item.day}</span><span>{item.hours}</span></li>)}
  </ul>;
}
