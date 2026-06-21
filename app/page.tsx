import { ComingSoon } from "@/components/coming-soon"
import { Marquee } from "@/components/marquee"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="bg-background">
      <ComingSoon />
      <Marquee />
      <SiteFooter />
    </main>
  )
}
