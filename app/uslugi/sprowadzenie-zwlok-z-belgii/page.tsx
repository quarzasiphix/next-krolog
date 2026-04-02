import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-belgii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZBelgiiPage() {
  return <InternationalTransportTemplate config={config} />
}
