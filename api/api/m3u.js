export default async function handler(req, res) {

  const streams = [
    {
      name: "Thapcam Live",
      url: "https://cdn-hls.phogatv8.com/live/69e58c2f137e2_14232/index.m3u8"
    }
  ];

  let m3u = "#EXTM3U\n\n";

  streams.forEach(s => {
    const proxy = `https://YOUR-VERCEL.vercel.app/api/stream?url=${encodeURIComponent(s.url)}`;

    m3u += `#EXTINF:-1,${s.name}\n`;
    m3u += `${proxy}\n\n`;
  });

  res.setHeader("Content-Type", "text/plain");
  res.send(m3u);
}
