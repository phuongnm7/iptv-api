export default async function handler(req, res) {
  const target = req.query.url;

  if (!target) {
    return res.status(400).send("Missing url");
  }

  const response = await fetch(target, {
    headers: {
      "Referer": "https://thapcamtvbc.mobi/",
      "User-Agent": "Mozilla/5.0"
    }
  });

  const contentType = response.headers.get("content-type");
  res.setHeader("Content-Type", contentType);

  let body = await response.text();

  const base = target.split("/").slice(0, -1).join("/");

  body = body.replace(/(?!http)(.*\.ts)/g, (m) => {
    return base + "/" + m;
  });

  res.send(body);
}
