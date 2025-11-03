interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id} className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}