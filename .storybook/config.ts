import { configure } from "@storybook/react";
import './addParameters';

const req = require.context("../components", true, /preview.[jt]sx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
