import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-niemiec')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZNiemiecPage() {
  return <InternationalTransportTemplate config={config} />
}
