import { buildInternationalTransportMetadata, getInternationalTransportConfig, InternationalTransportTemplate } from '@/lib/international-transport-pages'

const config = getInternationalTransportConfig('sprowadzenie-zwlok-z-francji')!

export const metadata = buildInternationalTransportMetadata(config)

export default function SprowadzenieZwlokZFrancjiPage() {
  return <InternationalTransportTemplate config={config} />
}
