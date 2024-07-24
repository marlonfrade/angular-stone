export interface LayoutProps {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}

export default function Layout({ preview, loading, children }: LayoutProps) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}
