"use client";

import React, { useState } from "react";

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="footer">
      <div
        id="w-node-_01191fa0-2abf-23ff-44da-acbdf6476df4-0ac01850"
        className="footer-full-height-container"
      >
        {/* Footer Product Feature */}
        <div
          id="w-node-f35c7284-aa91-03b1-62fc-d15dd1353c80-0ac01850"
          className="footer-product"
        >
          <div className="absolute-background">
            <img
              src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2fe215f8a5cce19bfe408_footer_product-bg-top.webp"
              width={700}
              height={700}
              alt="Matcha Product Top"
              className="footer-img top"
            />
            <img
              src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68b2fe215f8a5cce19bfe3f1_footer_product-bg.webp"
              width={700}
              height={700}
              alt="Matcha Product"
              className="footer-img"
            />
          </div>

          <div className="footer-product-text-inner">
            <h3 className="footer-product-heading">
              Matcha
              <br />
              meets
              <br />
              Protein
            </h3>

            <div aria-hidden="true" className="button is-light">
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
                <div className="button-cycle-bg light-bg" />
              </div>
              <div className="button-bg light-bg">
                <div className="button-text dark-font">Buy now</div>
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
                <div className="button-cycle-bg light-bg" />
              </div>
            </div>
          </div>

          <a
            aria-label="Buy now"
            href="https://morenutrition.co.uk/products/more-protein-iced-matcha-latte"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-product-link w-inline-block"
          />
        </div>

        {/* Footer Content */}
        <div
          id="w-node-_52f3956c-463e-cf84-00da-ec073fe306cc-0ac01850"
          className="footer-content"
        >
          {/* Quick links buttons */}
          <div
            id="w-node-_103e8af5-3d0c-0c66-5f7b-cd9c707fa04f-0ac01850"
            className="footer-fact-wrapper"
          >
            <a
              href="https://morenutrition.co.uk/collections/all-products-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-info is-first w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689754d9448e952a9e6c0aeb_Alle-Produkte_f1ba7a0d-4d19-4202-af26-db495d4d8559_100x100%201.svg"
                width={57}
                height={70}
                alt="All Products"
                className="footer-info-img is-first"
              />
              <div className="footer-info-text">
                shop all
                <br />
                Products
              </div>
            </a>

            <a
              href="https://morenutrition.co.uk/collections/samples-and-singlepacks-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-info is-second w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/689754d9d94ba5b480581df7_Group%2084.svg"
                width={58}
                height={49}
                alt="Samples"
                className="footer-info-img is-second"
              />
              <div className="footer-info-text">
                samples <br />
                &amp; Singles
              </div>
            </a>
          </div>

          {/* Social and links */}
          <div
            id="w-node-d7a8f3ad-3299-e0db-d6e1-45b4c5d40c53-0ac01850"
            className="footer-content-wrapper"
          >
            <h4 className="footer-heading">
              <span data-highlight-text="" className="heading-line">
                More Nutrition
              </span>{" "}
              <br />
              Iced Matcha Latte
            </h4>

            <div className="footer-shipping-wrapper">
              <a
                href="https://service.morenutrition.de/hc/en-us/sections/15534294234257-Shipping-and-Delivery"
                target="_blank"
                rel="noopener noreferrer"
                className="shipping-link w-inline-block"
              >
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">Shipping and Delivery</div>
                </div>
              </a>
              <a
                href="https://service.morenutrition.de/hc/en-us/sections/15534281016465-Return-Refund"
                target="_blank"
                rel="noopener noreferrer"
                className="shipping-link w-inline-block"
              >
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">Returns and Exchanges</div>
                </div>
              </a>
            </div>

            <div className="footer-social-media-wrap">
              <a
                href="https://www.instagram.com/morenutrition.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link w-inline-block"
              >
                <div className="social-media-circle is-white">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/688651ae6f6e0e5669c9d465_instagram.svg"
                    width={24}
                    height={24}
                    alt="Instagram"
                    className="social-media-icon"
                  />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@morenutrition.de?lang=de-DE"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link w-inline-block"
              >
                <div className="social-media-circle is-white">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/688651aeea8f52f9e4d418f2_tiktok.svg"
                    width={24}
                    height={24}
                    alt="TikTok"
                    className="social-media-icon"
                  />
                </div>
              </a>
              <a
                href="https://www.youtube.com/@more_nutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link w-inline-block"
              >
                <div className="social-media-circle is-white">
                  <img
                    src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/68d40d4b080c864fb3ec6e0f_youtube-svgrepo-com.svg"
                    width={24}
                    height={24}
                    alt="YouTube"
                    className="social-media-icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          id="w-node-_440e9322-e28d-ad9e-9ab8-9d51f2096f5d-0ac01850"
          className="footer-bottom"
        >
          <div className="footer-bottom-text">
            © More Nutrition. All Rights Reserved.
          </div>

          <button
            type="button"
            onClick={() => setShowCredits(!showCredits)}
            className="footer-credits-toggle"
          >
            <span className="footer-credits-toggle-wrap">
              <span className="footer-credits-toggle-text">
                {showCredits ? "Close Credits" : "Site Credits"}
              </span>
            </span>
          </button>

          {showCredits && (
            <div className="footer-credits" style={{ display: "block", marginTop: "1rem" }}>
              <div className="footer-credits-inner">
                <div className="footer-credits-detail">
                  <div className="footer-credits-text">3D Design</div>
                  <div className="credits-link-text">Tobias Anderssohn</div>
                </div>
                <div className="footer-credits-detail">
                  <div className="footer-credits-text">Web Design</div>
                  <div className="credits-link-text">Somefolk®</div>
                </div>
                <div className="footer-credits-detail">
                  <div className="footer-credits-text">Web Development</div>
                  <div className="credits-link-text">Future Three®</div>
                </div>
                <div className="footer-credits-detail">
                  <div className="footer-credits-text">Web Animation</div>
                  <div className="credits-link-text">Eduard Bodak</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Brand Logo */}
        <img
          src="https://cdn.prod.website-files.com/686c09a33211842a0ac0183d/687ea845b6162b993ddd0020_Group%201%20(1).svg"
          alt="More Nutrition Logo"
          className="footer-logo desktop"
        />
      </div>
    </div>
  );
}

