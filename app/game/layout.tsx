import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Hikken II",
	description: "Browser game",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
