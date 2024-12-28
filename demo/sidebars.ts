/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import petstoreVersions from "./docs/petstore_versioned/versions.json";
import {
  versionCrumb,
  versionSelector,
} from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";

import petstoreSidebar from "./docs/petstore/sidebar";
import petstoreVersionedSidebar from "./docs/petstore_versioned/sidebar";
import petstoreVersionSidebar from "./docs/petstore_versioned/1.0.0/sidebar";
import petstoreSidebar31 from "./docs/petstore31/sidebar";

import cloudObjectStorageSidebar from "./docs/cos/sidebar";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)">DOCUMENTATION</p>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "doc",
      id: "sidebars",
    },
    {
      type: "doc",
      id: "versioning",
    },
    {
      type: "doc",
      id: "advanced",
    },
    {
      type: "category",
      label: "Customization",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "customization",
        },
      ],
    },
  ],
  petstore: [
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-api",
      },
      items: petstoreSidebar,
    },
    {
      type: "category",
      label: "Petstore 3.1",
      link: {
        type: "generated-index",
        title: "Petstore API",
        description:
          "This is a sample server Petstore server in OpenAPI 3.1. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-31-api",
      },
      items: petstoreSidebar31,
    },
    {
      type: "category",
      label: "Cloud Object Storage",
      link: {
        type: "generated-index",
        title: "Cloud Object Storage API",
        slug: "/category/cos-api",
      },
      items: cloudObjectStorageSidebar,
    },
    {
      type: "category",
      label: "Burgers",
      link: {
        type: "generated-index",
        title: "Burger API",
        slug: "/category/food-api",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "food/burgers", // '.' means the current docs folder
        },
      ],
    },
    {
      type: "category",
      label: "Yogurt Store",
      link: {
        type: "generated-index",
        title: "Yogurt Store API",
        slug: "/category/yogurt-api",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "food/yogurtstore", // '.' means the current docs folder
        },
      ],
    },
    {
      type: "category",
      label: "Restaurant",
      link: {
        type: "generated-index",
        title: "Restaurant API",
        slug: "/category/restaurant-api",
      },
      items: require("./docs/restaurant/sidebar.js"),
    },
  ],
  petstore_nested: [{ type: "autogenerated", dirName: "." }],
  "petstore-2.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(petstoreVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`),
    },
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API (latest)",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-versioned-api",
      },
      items: petstoreVersionedSidebar,
    },
  ],

  "petstore-1.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(petstoreVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0.0`),
    },
    {
      type: "category",
      label: "Petstore",
      link: {
        type: "generated-index",
        title: "Petstore API (v1.0.0)",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/petstore-api-1.0.0",
      },
      items: petstoreVersionSidebar,
    },
  ],

  tests: [
    {
      type: "category",
      label: "Tests",
      link: {
        type: "generated-index",
        title: "Tests",
        description: "Various OpenAPI test cases",
        slug: "/category/tests",
      },
      items: require("./docs/tests/sidebar.js"),
    },
  ],
};

export default sidebars;
