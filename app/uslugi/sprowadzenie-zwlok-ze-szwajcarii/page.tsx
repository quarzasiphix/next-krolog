import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-ze-szwajcarii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZeSzwajcariiPage() {
  return <InternationalTransportTemplate config={config} />
}
