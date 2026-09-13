import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'ResumeBuilder Pro — Modern ATS-Friendly Resume Builder';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function DocIcon() {
  return (
    <svg width="52" height="64" viewBox="0 0 52 64" fill="none">
      <rect x="2" y="2" width="48" height="60" rx="6" fill="#ffffff" />
      <rect x="10" y="14" width="32" height="5" rx="2.5" fill="#6d28d9" />
      <rect x="10" y="26" width="32" height="4" rx="2" fill="#c4b5fd" />
      <rect x="10" y="34" width="22" height="4" rx="2" fill="#c4b5fd" />
      <rect x="10" y="46" width="32" height="4" rx="2" fill="#c4b5fd" />
      <rect x="10" y="54" width="18" height="4" rx="2" fill="#c4b5fd" />
    </svg>
  );
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0a1f 0%, #2e1065 55%, #4c1d95 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 36 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 22,
              background: '#6d28d9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(109,40,217,0.5)',
            }}
          >
            <DocIcon />
          </div>
          <div style={{ fontSize: 56, fontWeight: 800, color: '#ffffff', letterSpacing: -1 }}>
            ResumeBuilder Pro
          </div>
        </div>
        <div style={{ fontSize: 28, color: '#ddd6fe', maxWidth: 940, textAlign: 'center' }}>
          Modern ATS-Friendly Resume Builder
        </div>
        <div style={{ marginTop: 44, display: 'flex', gap: 16 }}>
          {['Live Preview', 'ATS Optimized', 'PDF Export'].map((t) => (
            <div
              key={t}
              style={{
                padding: '10px 24px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.08)',
                color: '#ede9fe',
                fontSize: 20,
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
