import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-norwegii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZNorwegiiPage() {
  return <InternationalTransportTemplate config={config} />
}
