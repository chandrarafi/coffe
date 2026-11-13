"use client";

import React, { useEffect, useRef } from "react";

export default function HeroStage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isMounted = true;
    const totalFrames = 23;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let currentFrame = 0;

    const basePath = "https://morematcha.vercel.app/img/";

    const renderFrame = (img: HTMLImageElement) => {
      if (!canvas || !ctx) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      // maintain aspect ratio
      const imgAspect = img.width / img.height;
      const canvasAspect = rect.width / rect.height;

      let drawW = rect.width;
      let drawH = rect.height;
      let drawX = 0;
      let drawY = 0;

      if (canvasAspect > imgAspect) {
        drawH = rect.height;
        drawW = drawH * imgAspect;
        drawX = (rect.width - drawW) / 2;
      } else {
        drawW = rect.width;
        drawH = drawW / imgAspect;
        drawY = (rect.height - drawH) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    };

    // Preload frames
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `${basePath}seq_1_${i}.webp`;
      img.onload = () => {
        loadedCount++;
        if (i === 0 && isMounted) {
          renderFrame(img);
        }
      };
      images.push(img);
    }

    // Gentle loop or intro playback
    let animationInterval: NodeJS.Timeout;
    const startPlayback = () => {
      animationInterval = setInterval(() => {
        if (!isMounted) return;
        currentFrame = (currentFrame + 1) % totalFrames;
        if (images[currentFrame] && images[currentFrame].complete) {
          renderFrame(images[currentFrame]);
        }
      }, 70);
    };

    startPlayback();

    const handleResize = () => {
      if (images[currentFrame] && images[currentFrame].complete) {
        renderFrame(images[currentFrame]);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      clearInterval(animationInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section data-load-stage="" data-inertia="" className="stage">
      <div className="stage-overlay" />
      <div className="stage-container">
        <div className="stage-inner">
          <div className="stage-content">
            {/* Stage Logo */}
            <div className="stage-logo">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/687ea845b6162b993ddd0020_Group%201%20(1).svg"
                alt="More Nutrition Logo"
                className="stage-logo-svg"
                style={{ width: "180px", height: "auto" }}
              />
            </div>

            {/* Stage CTA Button */}
            <div data-load-stage-cta="" className="stage-cta">
              <a
                href="https://morenutrition.co.uk/products/more-protein-iced-matcha-latte"
                target="_blank"
                rel="noopener noreferrer"
                className="button w-inline-block"
              >
                <div className="button-cycle is-first">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 10"
                    width="100%"
                    className="button-arrow"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="button-cycle-bg" />
                </div>
                <div className="button-bg">
                  <div className="button-text">Buy now</div>
                </div>
                <div className="button-cycle is-second">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 10"
                    width="100%"
                    className="button-arrow"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M0 1.827 1.71 0H10v8.22L8.11 10V5.93c0-.992.009-1.89.03-2.695l-6.642 6.58-1.316-1.44 6.641-6.58c-.787.022-1.67.032-2.647.032H0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="button-cycle-bg" />
                </div>
              </a>
            </div>

            {/* Stage Wrap */}
            <div className="stage-wrap">
              {/* Left Column (Canvas & Doodles) */}
              <div className="stage-left">
                <div className="stage-deco">
                  <div
                    data-load-stage-deco-text=""
                    style={{ ["--animation-delay" as string]: ".05s" }}
                    className="stage-deco-text-wrap"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68d41a7021c95a7f4ce8cd14_4bb0c9727f3cc3cf72d4fe155fa50163_Real%20Matcha%2C%20Origin%20al%20Taste.svg"
                      width={300}
                      height={112}
                      alt="Real Matcha, Original Taste"
                      className="stage-deco-text"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68d41a7021c95a7f4ce8cd14_4bb0c9727f3cc3cf72d4fe155fa50163_Real%20Matcha%2C%20Origin%20al%20Taste.svg"
                      width={300}
                      height={112}
                      alt="Real Matcha, Original Taste"
                      className="stage-deco-text is-wiggle"
                    />
                  </div>

                  <div
                    data-load-stage-deco-arrow=""
                    style={{ ["--animation-delay" as string]: ".15s" }}
                    className="stage-deco-arrow-wrap"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68a9a089d73e5cf84d4ded67_stage-sketch-arrow.svg"
                      width={150}
                      height={150}
                      alt="stage-sketch-arrow"
                      className="stage-deco-arrow"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68a9a089d73e5cf84d4ded67_stage-sketch-arrow.svg"
                      width={150}
                      height={150}
                      alt="stage-sketch-arrow"
                      className="stage-deco-arrow is-wiggle"
                    />
                  </div>
                </div>

                {/* Animated Canvas Visual */}
                <div className="stage-visual">
                  <canvas ref={canvasRef} className="stage-canvas" />
                </div>

                {/* Fact Badges */}
                <div className="stage-facts">
                  <div data-inertia-item="" className="stage-fact-outer">
                    <div className="stage-fact is-first">
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">20</div>
                        <div className="stage-fact-unit">g</div>
                      </div>
                      <div className="stage-fact-text">of Protein</div>
                    </div>
                  </div>

                  <div data-inertia-item="" className="stage-fact-outer">
                    <div className="stage-fact is-second">
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">95</div>
                        <div className="stage-fact-unit">%</div>
                      </div>
                      <div className="stage-fact-text">less Sugar</div>
                    </div>
                  </div>

                  <div data-inertia-item="" className="stage-fact-outer">
                    <div className="stage-fact is-third">
                      <div className="stage-fact-wrap">
                        <div className="stage-fact-number">85</div>
                        <div className="stage-fact-unit">mg</div>
                      </div>
                      <div className="stage-fact-text">of Caffeine</div>
                    </div>
                  </div>
                </div>

                <div className="stage-bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 731 818"
                    fill="none"
                    className="stage-bg-svg"
                  >
                    <path
                      d="M542.941 42.7702C707.951 122.986 766.918 351.375 667.592 555.698C568.265 760.021 352.233 854.727 187.223 774.512C22.2122 694.296 -36.7556 465.905 62.5711 261.582C161.898 57.2593 377.93 -37.4456 542.941 42.7702Z"
                      stroke="currentColor"
                      strokeWidth="28"
                    />
                  </svg>
                </div>
              </div>

              {/* Right Column (Hero Typography) */}
              <div className="stage-right">
                <div className="stage-text-wrap">
                  <h1 data-load-stage-title="" className="hero-heading">
                    <span className="white-span">Matcha</span>
                    <br />
                    meets
                    <br />
                    Protein
                  </h1>
                  <div className="stage-paragraph-wrap">
                    <p data-load-stage-text="" className="paragraph is-stage-paragraph">
                      Our More Protein Iced Matcha Latte blends matcha with protein and glucomannan, a
                      natural fiber that supports weight loss.
                    </p>
                    <div
                      data-load-stage-underline=""
                      style={{ ["--animation-delay" as string]: ".2s" }}
                      className="stage-subline-wrap"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/688655fd2fed5f707c038914_Layer_1%20(3).svg"
                        width={152}
                        height={42}
                        alt="Underline"
                        className="subline-img"
                      />
                      <img
                        src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/688655fd2fed5f707c038914_Layer_1%20(3).svg"
                        width={152}
                        height={42}
                        alt="Underline"
                        className="subline-img is-wiggle"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Marquee Banner */}
      <div data-marquee="" className="marquee">
        <div className="marquee-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1440 442"
            width="100%"
            style={{ overflow: "visible" }}
            className="marquee-bg-svg"
          >
            <path
              stroke="currentColor"
              strokeWidth="160"
              d="M-71 371.6C126.3 260 593.5 65.8 934.5 80.8c313 13.8 497 136 572 200"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1440 293"
            width="100%"
            style={{ overflow: "visible" }}
            className="marquee-text-svg"
          >
            <path
              d="M-68 300C173 173 515.5 1 937.2 1 1254.5 1 1468 183.3 1543 246.9"
              id="curve"
            />
            <text width="100%" style={{ transform: "translate3d(0,0,0)" }}>
              <textPath
                style={{ transform: "translate3d(0,0,0)" }}
                alignmentBaseline="hanging"
                href="#curve"
              >
                It´s a Match(a) · It´s a Match(a) · It´s a Match(a)
              </textPath>
            </text>
          </svg>
          <div className="marquee-overlay" />
        </div>
      </div>
    </section>
  );
}
