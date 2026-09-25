export const horizontalVideos = [
  { title: 'Building in Public', category: 'Talking Head', description: 'Crisp talking-head storytelling shaped for busy social feeds.', youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U' },
  { title: 'One More Round', category: 'Gaming', description: 'Energetic gameplay highlights with responsive sound design and timing.', youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ' },
  { title: 'Late Night Sessions', category: 'Gaming', description: 'A moody highlight cut that lets the big moments breathe.', youtubeUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0' },
]

export const verticalVideos = [
  { title: 'The 30-Second Reset', category: 'YouTube Short', description: 'A clean, high-retention edit with punchy captions and rhythm-led cuts.', youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { title: 'A Better Morning', category: 'Instagram Reel', description: 'A warm, visual-first reel with natural transitions and considered pacing.', youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4' },
  { title: 'The Creator Toolkit', category: 'YouTube Short', description: 'Fast, clear product storytelling with animated callouts and clean captions.', youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw' },
]

export function getYoutubeId(url) {
  return new URL(url).searchParams.get('v') || url.split('/').pop()
}