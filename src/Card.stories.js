import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Card from "./Card";
import Button from "./Button";

storiesOf("Card", module)
  .add("with text", () => <Card>Hello Card</Card>)
  .add("with children", () => (
    <Card>
      <Button onClick={action("clicked")}>Some Button</Button>
    </Card>
  ));
