import { ImageResponse } from 'next/og'

// Generate icon function
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#D4AF37',
          fontWeight: 'bold',
        }}
      >
        NŁ
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  )
}
