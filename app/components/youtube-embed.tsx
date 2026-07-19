type YouTubeEmbedProps = {
	videoId: string;
	title?: string;
	className?: string;
	autoPlay?: boolean;
};

export function youtubeThumbnail(videoId: string) {
	return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function youtubeEmbedUrl(videoId: string, autoPlay = false) {
	const params = new URLSearchParams({
		rel: "0",
		modestbranding: "1",
	});
	if (autoPlay) params.set("autoplay", "1");
	return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export default function YouTubeEmbed({
	videoId,
	title = "YouTube video",
	className = "",
	autoPlay = false,
}: YouTubeEmbedProps) {
	return (
		<div
			className={`relative aspect-video w-full overflow-hidden ${className}`}
		>
			<iframe
				src={youtubeEmbedUrl(videoId, autoPlay)}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				className="absolute inset-0 h-full w-full border-0"
			/>
		</div>
	);
}
