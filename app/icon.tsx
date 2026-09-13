import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 192, height: 192 };
export const contentType = 'image/png';

function DocIcon() {
  return (
    <svg width="80" height="98" viewBox="0 0 52 64" fill="none">
      <rect x="2" y="2" width="48" height="60" rx="6" fill="#ffffff" />
      <rect x="10" y="14" width="32" height="5" rx="2.5" fill="#6d28d9" />
      <rect x="10" y="26" width="32" height="4" rx="2" fill="#c4b5fd" />
      <rect x="10" y="34" width="22" height="4" rx="2" fill="#c4b5fd" />
      <rect x="10" y="46" width="32" height="4" rx="2" fill="#c4b5fd" />
      <rect x="10" y="54" width="18" height="4" rx="2" fill="#c4b5fd" />
    </svg>
  );
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#6d28d9',
          borderRadius: 40,
        }}
      >
        <DocIcon />
      </div>
    ),
    { ...size }
  );
}
