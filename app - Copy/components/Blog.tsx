interface BlogProps {
  darkMode: boolean;
}

export default function Blog({ darkMode }: BlogProps) {
  return (
    <section id="blog" className="min-h-screen p-16 bg-cover bg-center" style={{ backgroundImage: darkMode ? "url('https://images.unsplash.com/photo-1693409267953-3b2a658e62b1?w=1200')" : "url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=1200')" }}>
      <h2 className="text-4xl font-bold mb-8">Blog</h2>
      <p>Coming soon... You will be able to publish here anytime.</p>
    </section>
  );
}