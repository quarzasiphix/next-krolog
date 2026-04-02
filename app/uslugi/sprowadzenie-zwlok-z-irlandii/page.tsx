import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-irlandii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZIrlandiiPage() {
  return <InternationalTransportTemplate config={config} />
}
