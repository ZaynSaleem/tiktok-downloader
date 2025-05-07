import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { getVideoData } from './tiktok';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/healthcheck', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'TikTok Downloader API is running' });
  });

  // TikTok download API endpoint
  app.post('/api/download', async (req: Request, res: Response) => {
    try {
      const { url, withWatermark } = req.body;
      
      if (!url) {
        return res.status(400).json({ 
          success: false, 
          message: 'URL is required' 
        });
      }

      // Validate URL format
      if (!url.includes('tiktok.com')) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid TikTok URL' 
        });
      }

      // Get video data
      const videoData = await getVideoData(url, withWatermark === 'true');
      
      return res.status(200).json({
        success: true,
        data: videoData
      });
    } catch (error: any) {
      console.error('Download error:', error);
      return res.status(500).json({ 
        success: false, 
        message: error.message || 'Failed to download video' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
