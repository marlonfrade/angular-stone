import Container from './layout/Container'
import Layout from './layout/Layout'
import PageHead from './layout/PageHead'
import { Settings } from 'lib/sanity.queries'
import * as demo from 'lib/demo.data'
import HeroSection from './HeroSection'

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
        <Container>
          <HeroSection />
        </Container>
      </Layout>
    </>
  )
}
