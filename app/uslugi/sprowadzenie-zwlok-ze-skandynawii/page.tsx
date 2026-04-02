import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-ze-skandynawii')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZeSkandynawiiPage() {
  return <InternationalTransportTemplate config={config} />
}
