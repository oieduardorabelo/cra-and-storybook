import { configure } from "@storybook/react";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src", true, /_story\.jsx?$/));
}

configure(loadStories, module);
