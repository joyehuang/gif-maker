import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { gif, metadata = {} } = req.body;

    if (!gif) {
      return res.status(400).json({ error: 'GIF data is required' });
    }

    // 从 base64 转换为 Buffer
    const base64Data = gif.replace(/^data:image\/gif;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    // 生成唯一文件名
    const timestamp = Date.now();
    const filename = `gifs/${timestamp}.gif`;

    // 上传到 Vercel Blob
    const blob = await put(filename, buffer, {
      access: 'public',
      contentType: 'image/gif',
    });

    // 返回结果
    return res.status(200).json({
      success: true,
      url: blob.url,
      id: timestamp.toString(),
      metadata: {
        uploadedAt: new Date().toISOString(),
        ...metadata,
      },
    });
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({
      error: 'Failed to upload GIF',
      message: error.message
    });
  }
}
