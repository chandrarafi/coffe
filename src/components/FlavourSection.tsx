"use client";

import React, { useState } from "react";

const flavours = [
  {
    id: "strawberry",
    title: "Strawberry Perfection",
    subline: "Chunky Flavour®",
    dose: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c958d0422452a42640ce1a_slider-flavour-strawberry-dose.webp",
    pack: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c958d08fd58d9f97c0a559_slider-flavour-strawberry-pack.webp",
    link: "https://morenutrition.co.uk/products/chunky-flavour",
  },
  {
    id: "fudge-brownie",
    title: "Fudge Brownie",
    subline: "Chunky Flavour®",
    dose: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd8833449d96f96a8b2f_slider-flavour-fudge-brownie-dose.webp",
    pack: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd899ab270ca74992378_slider-flavour-fudge-brownie-pack.webp",
    link: "https://morenutrition.co.uk/products/chunky-flavour?variant=51094746005668",
  },
  {
    id: "vanilla-choc",
    title: "Vanilla Choc Chip Cookie",
    subline: "Chunky Flavour®",
    dose: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd89c0ba63f9f1a0474f_slider-flavour-vanilla-choc-chip-dose.webp",
    pack: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd8966162a74314fbec6_slider-flavour-vanilla-choc-chip-pack.webp",
    link: "https://morenutrition.co.uk/products/chunky-flavour?variant=51094747578532",
  },
  {
    id: "salted-caramel",
    title: "Salted Caramel",
    subline: "Chunky Flavour®",
    dose: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9be3296b7aa51aad8dd5d_slider-flavour-salted-caramel-dose.webp",
    pack: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd886d19ccf79464c844_slider-flavour-salted-caramel-pack.webp",
    link: "https://morenutrition.co.uk/products/chunky-flavour?variant=51094765076644",
  },
  {
    id: "vanilla-perfection",
    title: "Vanilla Perfection",
    subline: "Chunky Flavour®",
    dose: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd88dfdd73be537ddc99_slider-flavour-vanilla-perfection-dose.webp",
    pack: "https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c9bd88efee0e997f4efce6_slider-flavour-vanilla-perfection-pack.webp",
    link: "https://morenutrition.co.uk/products/chunky-flavour?variant=51094761996452",
  },
];

export default function FlavourSection() {
  const [activeFlavourIdx, setActiveFlavourIdx] = useState(0);

  const prevFlavour = () => {
    setActiveFlavourIdx((prev) => (prev === 0 ? flavours.length - 1 : prev - 1));
  };

  const nextFlavour = () => {
    setActiveFlavourIdx((prev) => (prev === flavours.length - 1 ? 0 : prev + 1));
  };

  const current = flavours[activeFlavourIdx];

  return (
    <section data-inertia="" className="flavour">
      <div className="flavour-container">
        {/* Header */}
        <div className="flavour-header">
          <div className="flavour-heading-wrap">
            <h2 className="flavour-title">Chunky Flavour</h2>
            <h3 data-highlight-text="" className="flavour-subline">
              New Taste, Low Sugar
            </h3>
          </div>
          <p className="flavour-paragraph">
            Simply stir in 3 g of Chunky Flavour with your 300g Matcha Latte to create a sweeter
            flavour sensation!
          </p>
        </div>

        {/* Content */}
        <div data-flavour-content="" className="flavour-content">
          {/* Base Product Left */}
          <div className="flavour-left">
            <div className="flavour-signature-wrap">
              <div className="flavour-signature">
                <img
                  src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c94823c24b2c7988de3d7a_slider-signature.svg"
                  width={300}
                  height={90}
                  alt="Signature"
                  className="flavour-signature-img"
                />
              </div>
              <div
                style={{ ["--animation-delay" as string]: ".15s" }}
                className="flavour-signature-arrow"
              >
                <img
                  src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c94823659937fb4ddc9834_slider-signature-arrow.svg"
                  width={147}
                  height={150}
                  alt="Arrow"
                  className="flavour-signature-arrow-img"
                />
              </div>
            </div>

            <div data-inertia-item="" className="flavour-left-dose">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c93e5ef45e668c761efd15_slider-base-product-visual.webp"
                width={481}
                height={1002}
                alt="More Matcha Pack"
                className="flavour-left-dose-img"
              />
            </div>
            <div data-inertia-item="" className="flavour-left-pack is-first">
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c93e5ef2ba34cbfb878f82_slider-base-product-pack.webp"
                width={447}
                height={699}
                alt="Pack"
                className="flavour-left-pack-img"
              />
            </div>
          </div>

          {/* Plus sign */}
          <div className="flavour-plus">
            <img
              src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68c948227a747d8be568507e_slider-plus.svg"
              width={146}
              height={150}
              alt="Plus"
              className="flavour-plus-img"
            />
          </div>

          {/* Flavour Right Visual */}
          <div className="flavour-right">
            <div className="flavour-slide-inner transition-all duration-300">
              <div data-inertia-item="" className="flavour-slide-dose">
                <img
                  className="flavour-slide-dose-img transition-opacity duration-300"
                  src={current.dose}
                  width={723}
                  height={615}
                  alt={current.title}
                />
              </div>
              <div data-inertia-item="" className="flavour-slide-pack is-first">
                <img
                  className="flavour-slide-pack-img transition-opacity duration-300"
                  src={current.pack}
                  width={653}
                  height={478}
                  alt={current.title}
                />
              </div>
            </div>

            <div className="flavour-right-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 769 691"
                fill="none"
                className="flavour-right-bg-svg"
              >
                <path
                  d="M245.813 59.5015C54.1619 152.668 -34.1186 356.234 41.6525 512.101C117.424 667.969 332.042 724.289 523.692 631.123C715.343 537.957 803.624 334.39 727.852 178.522C652.081 22.6546 437.463 -33.6648 245.813 59.5015Z"
                  stroke="currentColor"
                  strokeWidth="28"
                />
              </svg>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flavour-navigation">
            <button
              type="button"
              onClick={prevFlavour}
              className="flavour-slider-button is-left"
              aria-label="Previous flavour"
            >
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0fba88460ab65187e9_icon-arrow-left.svg"
                width={20}
                height={20}
                alt="Previous"
                className="flavour-slider-button-arrow"
              />
            </button>
            <button
              type="button"
              onClick={nextFlavour}
              className="flavour-slider-button is-right"
              aria-label="Next flavour"
            >
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2de0f2245f238d5eb3226_icon-arrow-right.svg"
                width={20}
                height={20}
                alt="Next"
                className="flavour-slider-button-arrow"
              />
            </button>
          </div>

          {/* Center Info Card */}
          <div className="flavour-center">
            <div className="flavour-content-slide-inner">
              <div className="flavour-content-slide-header">
                <h3 className="flavour-content-slider-title">{current.title}</h3>
                <p className="flavour-content-slider-subline">{current.subline}</p>
              </div>
              <a
                href={current.link}
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
          </div>
        </div>
      </div>
    </section>
  );
}

