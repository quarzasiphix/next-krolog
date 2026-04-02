import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-holandii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZHolandiiPage() {
  return <InternationalTransportTemplate config={config} />
}
