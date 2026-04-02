import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-austrii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZAustriiPage() {
  return <InternationalTransportTemplate config={config} />
}
