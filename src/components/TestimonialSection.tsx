"use client";

import React, { useState } from "react";

const testimonials = [
  {
    name: "Daniela A.",
    heading: "Best matcha ever!",
    text: "I already have it and they bought it straight away too.",
  },
  {
    name: "Tina H.",
    heading: "Super delicious!",
    text: "Super delicious with ice cubes, water and oat-almond milk.",
  },
  {
    name: "Sandra D.",
    heading: "Risk of addiction 🙈",
    text: "The Iced Matcha Latte is so delicious, with a truly creamy consistency.",
  },
  {
    name: "Sandra W.",
    heading: "The best Matcha.",
    text: "This matcha has a sweet and tangy raspberry flavor. Perfect for breakfast or lunch.",
  },
  {
    name: "Carolin S.",
    heading: "Highly recommended!",
    text: "Very tasty, dissolves perfectly. No clumps and a proper matcha flavor.",
  },
  {
    name: "Farah M.",
    heading: "Favorite!!!",
    text: "My favorite variety. Depending on my mood, I just add the matching Chunky flavor and enjoy 😌",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="reviews" className="testimonial-section">
      <div data-testimonial-parallax="" className="bg-img-wrapper">
        <img
          className="testimonial-top-img"
          src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541efc32332b4d96332e4_5aa593a5c181883619e1ec2e48b9a77009ae6ddd.webp"
          alt="Iced Matcha Latte - More Nutrition"
        />
        <img
          className="bg-img"
          src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689541d1c4bb0b452cb46e3e_b525d1f05540193d88caa60b825b8887a650d649.webp"
          alt="Iced Matcha Latte - More Nutrition"
        />
      </div>

      <div className="testimonial-container">
        <div className="grid-layout">
          {/* Big Heading */}
          <div
            id="w-node-_188a35c2-2913-dd29-6c54-5bf8cbbe64f3-0ac01850"
            className="big-title-wrapper"
          >
            <div className="testimonial-signature">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2e8120f5b95bfbd87aebf_testimonial-signature.svg"
                width={300}
                height={27}
                alt="Signature"
                className="testimonial-signature-img"
              />
            </div>
            <h2 className="testimonial-big-heading">
              Clean. Green. <br />
              Goodness.
            </h2>
          </div>

          {/* Slider */}
          <div
            id="w-node-d56024cf-9b70-fc24-7ba0-e2b3ea8d1769-0ac01850"
            className="testimonial-slider"
          >
            <h3 className="testimonial-heading">
              don’t take our <br />
              word for it
            </h3>

            <div data-testimonial-inview="" className="testimonial-slider-wrapper">
              <div data-slider-interface="" className="testimonial-slider-interface">
                <div data-slider-arrows="" className="testimonial-slider-button-wrapper">
                  <button
                    type="button"
                    onClick={prevReview}
                    className="testimonial-slider-button is-left"
                    aria-label="Previous review"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0fba88460ab65187e9_icon-arrow-left.svg"
                      width={20}
                      height={20}
                      alt="Left"
                      className="testimonial-slider-button-arrow"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={nextReview}
                    className="testimonial-slider-button is-right"
                    aria-label="Next review"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0f2245f238d5eb3226_icon-arrow-right.svg"
                      width={20}
                      height={20}
                      alt="Right"
                      className="testimonial-slider-button-arrow"
                    />
                  </button>
                </div>
              </div>

              {/* Slider Track */}
              <div
                data-slider=""
                className="testimonial-slider-inner"
                style={{
                  display: "flex",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="testimonial-slider-item-wrap"
                    style={{ flexShrink: 0, width: "100%" }}
                  >
                    <div data-slider-item-inner="" className="testimonial-slider-item">
                      {/* 5 Stars */}
                      <div className="testimonial-star-wrap">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2bdb3390600fa418ac907_icon-testimonial-star.svg"
                            width={20}
                            height={20}
                            alt="Star"
                            className="testimonial-star"
                          />
                        ))}
                      </div>

                      <div className="testimonial-item-inner-text">
                        <h3 className="testimonial-item-heading">{item.heading}</h3>
                        <p className="testimonial-item-text">{item.text}</p>
                      </div>

                      <div className="testimonial-line" />

                      <div className="testimonial-item-bottom">
                        <div className="testimonial-client-name">{item.name}</div>
                        <div className="testimonial-verified-wrap">
                          <img
                            src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2c1be2762f3ffc1be06c5_icon-bubble-check.svg"
                            width={20}
                            height={20}
                            alt="Verified"
                            className="testimonial-verified-icon"
                          />
                          <div className="testimonial-verified-text">Verified</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

