interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <>
      <h2 className="text-4xl md:text-5xl mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />
    </>
  );
}