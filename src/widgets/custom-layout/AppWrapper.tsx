import DefaultHeader from "../headers/DefaultHeader";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <DefaultHeader />
      {children}
    </div>
  );
}
