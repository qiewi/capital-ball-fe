"use client";

export function CharacterSection() {
  const characters = [
    {
      title: "Precision",
      description: "Every decision is deliberate. We rely on research, analytics, and careful judgment to choose assets that fit your goals — no guesswork, no hype.",
      image: "/images/About/content-1.png"
    },
    {
      title: "Patience",
      description: "We know that building real wealth takes time. Our strategies are designed to stay focused on the bigger picture and not be swayed by short-term market drama.",
      image: "/images/About/content-2.png"
    },
    {
      title: "Performance",
      description: "At the end of the day, results matter. We aim to deliver strong, consistent returns while safeguarding what you've worked so hard to build.",
      image: "/images/About/content-3.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
            AT A PLAYBOOK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img
                  src={character.image}
                  alt={character.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {character.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {character.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}