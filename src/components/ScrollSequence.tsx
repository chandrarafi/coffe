"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const totalFrames = 200;
    const images: HTMLImageElement[] = new Array(totalFrames);
    const basePath = "https://morematcha.vercel.app/img/";
    let currentFrame = 0;
    let isMounted = true;

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img || !img.complete || !ctx || !canvas) return;

      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

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

    // Load initial 20 frames immediately, then lazily queue rest
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `${basePath}seq_0_${i}.webp`;
      img.onload = () => {
        if (i === 0 && isMounted) {
          renderFrame(0);
        }
      };
      images[i] = img;
    }

    const handleScroll = () => {
      if (!container || !isMounted) return;
      const rect = container.getBoundingClientRect();
      const scrollHeight = rect.height - window.innerHeight;
      if (scrollHeight <= 0) return;

      // Calculate progress between 0 and 1
      const progress = Math.min(1, Math.max(0, -rect.top / scrollHeight));
      const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.floor(progress * (totalFrames - 1))));

      if (frameIndex !== currentFrame) {
        currentFrame = frameIndex;
        renderFrame(frameIndex);
      }

      // Step cards
      if (progress < 0.15) {
        setActiveStep(0);
      } else if (progress < 0.35) {
        setActiveStep(1);
      } else if (progress < 0.55) {
        setActiveStep(2);
      } else if (progress < 0.75) {
        setActiveStep(3);
      } else if (progress < 0.9) {
        setActiveStep(4);
      } else {
        setActiveStep(5);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => renderFrame(currentFrame));

    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="nutrition" data-sequence="" className="sequence-section">
      {/* Decorative Signature */}
      <div className="sequence-signature">
        <div className="sequence-signature-text">
          <img
            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b9b2bf0b05111fd229e95c_sequence-why-people-love-it.svg"
            width={300}
            height={104}
            alt="Why people love it"
            className="sequence-signature-text-img"
          />
          <img
            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b9b2bf0b05111fd229e95c_sequence-why-people-love-it.svg"
            width={300}
            height={104}
            alt="Why people love it"
            className="sequence-signature-text-img is-wiggle"
          />
        </div>
        <div className="sequence-signature-arrow">
          <img
            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b9b2bfdc8daf0458376a72_sequence-why-people-arrow.svg"
            width={150}
            height={150}
            alt="Arrow"
            className="sequence-signature-arrow-img"
          />
          <img
            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b9b2bfdc8daf0458376a72_sequence-why-people-arrow.svg"
            width={150}
            height={150}
            alt="Arrow"
            className="sequence-signature-arrow-img is-wiggle"
          />
        </div>
      </div>

      {/* 200-Frame Scroll Sequence Track */}
      <div
        ref={containerRef}
        data-sequence-trigger=""
        className="sequence-scroll-wrap"
        style={{ height: "450vh", position: "relative" }}
      >
        <div
          data-sequence-stage=""
          className="sequence-sticky"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <canvas ref={canvasRef} className="sequence-canvas" />

          {/* Interactive Cards overlaid during scroll */}
          <div className="sequence-cards" style={{ pointerEvents: "none" }}>
            {/* Card 1: More Taste */}
            <div
              className={`statement-card is-first transition-all duration-500 ${
                activeStep === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="statement-card-wrapper">
                <div className="top-smiley is-card">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689534f1390e42ee1492e9df_Group%2042.svg"
                    alt="Smiley"
                  />
                </div>
                <h2 className="statement-heading">
                  More
                  <br /> Taste
                </h2>
                <div className="statement-card-paragraph-wrap">
                  <div className="first-statement-icon">
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689bbc7e54e7ae27ef30fe2a_Layer_1%20(7).svg"
                      alt="Circle"
                      className="first-statement-icon-img"
                    />
                  </div>
                  <p className="paragraph center-align">
                    Finest matcha. Smooth &amp; creamy.
                    <br />
                    20g of pure protein per serving, for your <br />
                    ultimate green power drink.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: More Caffeine */}
            <div
              className={`statement-card is-second transition-all duration-500 ${
                activeStep === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="statement-card-wrapper left">
                <div className="top-smiley is-card">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689534f1390e42ee1492e9df_Group%2042.svg"
                    alt="Smiley"
                  />
                </div>
                <h2 className="statement-heading">More Caffeine</h2>
                <div className="statement-card-paragraph-wrap">
                  <div className="second-icon">
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689c4dc54e2bba0f8a77b238_Layer_1%20(9).svg"
                      alt="Thunder"
                      className="second-icon-img"
                    />
                  </div>
                  <p className="paragraph center-align">
                    85mg of caffeine per serving, <br />
                    equal to a cappuccino. <br />
                    Your daily energy boost.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: More weight loss */}
            <div
              className={`statement-card is-third transition-all duration-500 ${
                activeStep === 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="statement-card-wrapper">
                <div className="top-smiley is-card">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689534f1390e42ee1492e9df_Group%2042.svg"
                    alt="Smiley"
                  />
                </div>
                <h2 className="statement-heading">More weight loss</h2>
                <div className="statement-card-paragraph-wrap">
                  <div className="third-statement-icon">
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689c4ee13616a5bb6e89d831_Vector%20(6).svg"
                      alt="Arrow"
                      className="third-statement-icon-img"
                    />
                  </div>
                  <p className="paragraph center-align">
                    With glucomannan - clinically proven to <br />
                    support weight loss, ideal for your conscious
                    <br />
                    lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: No added sugar */}
            <div
              className={`statement-card is-fourth transition-all duration-500 ${
                activeStep === 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="statement-card-wrapper left">
                <div className="top-smiley is-card">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689534f1390e42ee1492e9df_Group%2042.svg"
                    alt="Smiley"
                  />
                </div>
                <h2 className="statement-heading">No added sugar</h2>
                <div className="statement-card-paragraph-wrap">
                  <div className="fourth-statement-icon">
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689c4f47af9547f0f5223089_Vector%20(7).svg"
                      alt="Circle"
                      className="fourth-statement-icon-img"
                    />
                  </div>
                  <p className="paragraph center-align">
                    No added sugar - only naturally occurring, <br />
                    with 95% less sugar than traditional instant
                    <br />
                    matcha lattes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sequence Final Banner */}
          <div
            className={`sequence-final transition-opacity duration-700 ${
              activeStep === 5 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 data-sequence-title="" className="sequence-title">
              Matcha, just the
              <br />
              way you like it.
              <br />
              <span className="light-green-span">What’s your flavour?</span>
              <br />
            </h2>
            <div className="sequence-final-signature">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68bb4a56d6965dfedaaf9bbb_sequence-vanilla-crumble.svg"
                width={285}
                height={150}
                alt="Vanilla Crumble"
                className="sequence-final-signature-img"
              />
            </div>
            <div className="sequence-final-signature is-first-arrow">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68bb4d0addb7dabb6793ee05_sequence-vanilla-crumble-arrow.svg"
                width={300}
                height={92}
                alt="Arrow"
                className="sequence-final-signature-img"
              />
            </div>
            <div className="sequence-final-signature is-second">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68bb4ef605d3c803020c0a8c_sequence-strawberry-cheesecake.svg"
                width={300}
                height={125}
                alt="Strawberry Cheesecake"
                className="sequence-final-signature-img"
              />
            </div>
            <div className="sequence-final-signature is-second-arrow">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68bb51400be6f0687f9cb522_sequence-strawberry-cheesecake-arrow.svg"
                width={153}
                height={150}
                alt="Arrow"
                className="sequence-final-signature-img"
              />
            </div>
            <img
              src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68bb559a04860444181393aa_sequence-cookie.webp"
              width={340}
              height={344}
              alt="Cookie"
              className="sequence-final-cookie"
            />
            <img
              src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68bb559a1333de45c53ee927_sequence-strawberry.webp"
              width={594}
              height={594}
              alt="Strawberry"
              className="sequence-final-strawberry"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

