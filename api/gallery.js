import { list } from '@vercel/blob';

export default async function handler(req, res) {
  // 只允许 GET 请求
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 获取查询参数
    const limit = parseInt(req.query.limit) || 20;
    const cursor = req.query.cursor;

    // 从 Vercel Blob 获取文件列表
    const result = await list({
      prefix: 'gifs/',
      limit: limit,
      cursor: cursor,
    });

    // 格式化结果
    const gifs = result.blobs.map(blob => ({
      id: blob.pathname.replace('gifs/', '').replace('.gif', ''),
      url: blob.url,
      uploadedAt: blob.uploadedAt,
      size: blob.size,
    }));

    return res.status(200).json({
      success: true,
      gifs: gifs,
      cursor: result.cursor,
      hasMore: result.hasMore,
    });
  } catch (error) {
    console.error('Gallery error:', error);
    return res.status(500).json({
      error: 'Failed to fetch gallery',
      message: error.message
    });
  }
}
