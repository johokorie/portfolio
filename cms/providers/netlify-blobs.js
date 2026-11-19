const { getStore } = require("@netlify/blobs");
const { Readable } = require("node:stream");

module.exports = {
  init() {
    const store = () => getStore("portfolio-cms-media");
    async function upload(file) {
      const key = `${file.hash}${file.ext || ""}`;
      const stream = file.getStream ? file.getStream() : file.stream;
      const data = file.buffer || Buffer.from(await new Response(Readable.toWeb(stream)).arrayBuffer());
      if (data.byteLength > 10 * 1024 * 1024) throw new Error("File is too large");
      await store().set(key, data);
      file.url = `/media/${encodeURIComponent(key)}`;
    }
    return { upload, uploadStream: upload, async delete(file) { await store().delete(`${file.hash}${file.ext || ""}`); } };
  },
};
