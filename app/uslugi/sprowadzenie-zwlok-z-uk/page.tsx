import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-uk')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZUKPage() {
  return <InternationalTransportTemplate config={config} />
}
