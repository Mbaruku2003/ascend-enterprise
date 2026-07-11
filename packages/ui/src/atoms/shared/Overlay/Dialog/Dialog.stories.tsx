import type {
    Meta,
    StoryObj,
} from "@storybook/react";

import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from ".";

import Button from "../../Button";

const meta: Meta<typeof Dialog> = {
    title: "Shared/Overlay/Dialog",
    component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger>
                <Button>
                    Open Dialog
                </Button>
            </DialogTrigger>

            <DialogPortal>
                <DialogOverlay />

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Delete Account
                        </DialogTitle>

                        <DialogDescription>
                            This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogBody>
                        Dialog content goes here.
                    </DialogBody>

                    <DialogFooter>
                        <Button variant="secondary">
                            Cancel
                        </Button>

                        <Button color="danger">
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    ),
};
