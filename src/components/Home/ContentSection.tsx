import Image from "next/image";

interface ContentSectionProps {
  bgColor?: "white" | "black" | "gray";
  variant?: "left" | "right";
  contentType: "image" | "video";
  videoLink?: string;
  title: string;
  subtitle?: string;
  description: string[];
  imageSrc?: string;
  imageAlt?: string;
  videoTitle?: string;
  videoCaption?: string;
}

export function ContentSection({
  bgColor = "white",
  variant = "right",
  contentType,
  videoLink,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  videoTitle,
  videoCaption,
}: ContentSectionProps) {
  const isContentOnRight = variant === "right";

  const getBgColorClass = () => {
    switch (bgColor) {
      case "black":
        return "bg-slate-900";
      case "gray":
        return "bg-gray-200";
      case "white":
      default:
        return "bg-white";
    }
  };

  const getTextColorClass = () => {
    switch (bgColor) {
      case "black":
        return "text-white";
      case "gray":
        return "text-slate-900";
      case "white":
      default:
        return "text-slate-900";
    }
  };

  const getSubtitleColorClass = () => {
    switch (bgColor) {
      case "black":
        return "text-slate-300";
      case "gray":
        return "text-slate-500";
      case "white":
      default:
        return "text-slate-500";
    }
  };

  const getDescriptionColorClass = () => {
    switch (bgColor) {
      case "black":
        return "text-slate-300";
      case "gray":
        return "text-slate-700";
      case "white":
      default:
        return "text-slate-700";
    }
  };

  const textContent = (
    <div className={isContentOnRight ? "lg:pr-8" : "lg:pl-8"}>
      {subtitle && (
        <div className="mb-8">
          <span className={`text-sm font-semibold uppercase tracking-wider ${getSubtitleColorClass()}`}>
            {subtitle}
          </span>
        </div>
      )}

      <h2 className={`text-4xl lg:text-5xl font-bold mb-8 leading-tight ${getTextColorClass()}`}>
        {title}
      </h2>

      <div className={`space-y-6 text-lg leading-relaxed ${getDescriptionColorClass()}`}>
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );

  const mediaContent = (
    <div className="relative">
      {contentType === "video" && videoLink ? (
        <>
          <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoLink}
              title={videoTitle || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          {videoCaption && (
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-2 rounded text-sm">
              {videoCaption}
            </div>
          )}
        </>
      ) : contentType === "image" && imageSrc ? (
        <div className="relative aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || "Content image"}
            fill
            className="object-cover"
          />
        </div>
      ) : null}
    </div>
  );

  return (
    <section className={`${getBgColorClass()} py-20`}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {isContentOnRight ? (
            <>
              {textContent}
              {mediaContent}
            </>
          ) : (
            <>
              {mediaContent}
              {textContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}