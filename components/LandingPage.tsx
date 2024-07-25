import Container from './layout/Container'
import Layout from './layout/Layout'
import PageHead from './layout/PageHead'
import { Settings } from 'lib/sanity.queries'
import * as demo from 'lib/demo.data'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import MissionVisionValuesSection from './MissionVisionValuesSection'
import ServicesSection from './ServicesSection'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
import Footer from './Footer'
import CTASection from './CTASection'

export interface LandingPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
}

export default function LandingPage(props: LandingPageProps) {
  const { preview, loading, settings } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <PageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <div className="lg:bg-[linear-gradient(90deg,_white_70%,_#002657_70%)] min-h-screen">
          <HeroSection />
        </div>
        <Container>
          <AboutSection />
          <MissionVisionValuesSection />
          <ServicesSection />
          <TeamSection />
          <BlogSection />
          <CTASection />
          <Footer />
        </Container>
      </Layout>
    </>
  )
}
