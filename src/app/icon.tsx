import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f5b642', // Gold color for class
          fontFamily: 'Georgia, serif', // Classy font
          borderRadius: '50%',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)', // Subtle shadow for depth
        }}
      >
        ly
      </div>
    ),
    {
      ...size,
    }
  )
}
