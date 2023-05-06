import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { Button } from "../Button";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export function Default() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Modal</Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <h2>Modal Content</h2>
      </Modal>
    </>
  );
}
