const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT) || 4173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "X-Frame-Options": "SAMEORIGIN",
};

const server = http.createServer((request, response) => {
  if (!["GET", "HEAD"].includes(request.method || "GET")) {
    response.writeHead(405, { ...securityHeaders, Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }

  const urlPath = decodeURIComponent(request.url.split("?")[0]);
  const propertyRoute = urlPath.match(/^\/propiedades\/(.+)$/);
  const propertyResource = propertyRoute?.[1] || "";
  const requested = urlPath === "/"
    ? "index.html"
    : propertyRoute && !path.extname(propertyResource)
      ? "index.html"
      : propertyRoute
        ? propertyResource
        : urlPath.replace(/^\/+/, "");
  const file = path.resolve(root, requested);
  const relativePath = path.relative(root, file);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    response.writeHead(403, securityHeaders);
    response.end("Forbidden");
    return;
  }

  fs.readFile(file, (error, data) => {
    if (error) {
      fs.readFile(path.join(root, "404.html"), (notFoundError, notFoundPage) => {
        if (notFoundError) {
          response.writeHead(404, { ...securityHeaders, "Content-Type": "text/plain; charset=utf-8" });
          response.end("Not found");
          return;
        }
        response.writeHead(404, { ...securityHeaders, "Content-Type": "text/html; charset=utf-8" });
        response.end(request.method === "HEAD" ? undefined : notFoundPage);
      });
      return;
    }

    response.writeHead(200, { ...securityHeaders, "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Meirah Group running at http://127.0.0.1:${port}/`);
});
