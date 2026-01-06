export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-gray-800 p-4 text-white">Dashboard Header</header>
            <main className="flex-1">{children}</main>
        </div>
    );
}
