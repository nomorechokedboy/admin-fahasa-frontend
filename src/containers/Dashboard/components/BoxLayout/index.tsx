import { Text, MantineSize, MantineNumberSize } from "@mantine/core";
import { ReactNode } from "react";

type BoxLayoutProps = {
    title: string;
    titleSize?: MantineSize;
    titleMb?: MantineNumberSize;
    children: ReactNode;
};

export default function BoxLayout({
    title,
    titleSize,
    titleMb,
    children,
}: BoxLayoutProps) {
    return (
        <>
            <Text size={titleSize || "xl"} weight="bold" mb={titleMb || "md"}>
                {title}
            </Text>
            {children}
        </>
    );
}
