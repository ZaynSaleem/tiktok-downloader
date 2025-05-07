import { useState } from "react";

export default function HeroSection() {
  const [tiktokUrl, setTiktokUrl] = useState("");
  const [withWatermark, setWithWatermark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setDownloadLink("");
    setIsSuccess(false);

    try {
      if (!tiktokUrl) {
        throw new Error("Please enter a TikTok URL");
      }

      if (!tiktokUrl.includes("tiktok.com")) {
        throw new Error("Please enter a valid TikTok URL");
      }

      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: tiktokUrl,
          withWatermark: withWatermark ? "true" : "false",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to download video");
      }

      if (!data.success) {
        throw new Error(data.message || "Failed to process video");
      }

      if (data.data.isSlideshow && data.data.images) {
        // For slideshows, we'll just provide the first image as download
        setDownloadLink(data.data.images[0]);
      } else {
        setDownloadLink(data.data.url);
      }
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden py-12 md:py-20 px-6 md:px-12">
      <div className="absolute top-20 -right-20 w-64 h-64 bg-glow-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-glow-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Download TikTok Videos <span className="text-glow-green">Easily</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Enter a TikTok video URL, click download, and save your favorite videos in seconds.   
          </p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto relative bg-dark-800 p-6 md:p-8 rounded-xl border border-dark-700 shadow-xl">
          <form onSubmit={handleDownload}>
            <div className="mb-4">
              <label htmlFor="tiktokUrl" className="block mb-2 text-lg font-medium">
                TikTok URL
              </label>
              <input
                id="tiktokUrl"
                type="url"
                placeholder="https://www.tiktok.com/@username/video/1234567890123456789"
                value={tiktokUrl}
                onChange={(e) => setTiktokUrl(e.target.value)}
                className="w-full p-3 rounded-lg bg-dark-700 border border-dark-600 text-white focus:outline-none focus:ring-2 focus:ring-glow-green focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={withWatermark}
                  onChange={(e) => setWithWatermark(e.target.checked)}
                  className="h-5 w-5 text-glow-green bg-dark-700 border-dark-600 rounded focus:ring-glow-green focus:ring-offset-dark-800"
                />
                <span className="ml-2">Download with watermark</span>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-medium flex justify-center items-center transition-all duration-300 ${loading ? "bg-dark-600 cursor-not-allowed" : "bg-glow-green text-dark-900 hover:bg-glow-green/90 glow-effect glow-green"}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Download Video"
              )}
            </button>
          </form>
          
          {error && (
            <div className="mt-4 p-3 bg-destructive/20 border border-destructive/50 rounded-lg text-white">
              <p className="font-medium text-destructive">Error:</p>
              <p>{error}</p>
            </div>
          )}
          
          {isSuccess && downloadLink && (
            <div className="mt-4 p-4 bg-glow-green/20 border border-glow-green/50 rounded-lg text-white">
              <p className="font-medium text-glow-green">Success! Your video is ready:</p>
              <div className="mt-3">
                <a
                  href={downloadLink}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 text-center rounded-lg bg-glow-green text-dark-900 font-medium hover:bg-glow-green/90 transition-colors"
                >
                  Save Video
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
