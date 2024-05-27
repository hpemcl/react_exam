import Link from 'next/link';

const callouts = [
  {
    name: 'Første Prototype',
    description: 'One-page Application med React-Reveal',
    imageAlt: 'Denne sektion handler om oprettelse af en one-page applikation, typisk brugt til porteføljer eller præsentationer af kunstnere eller bands.',
    href: './one_page', 
  },
  {
    name: 'Anden Prototype',
    description: 'Informationswebsite med React Spring',
    imageAlt: 'Denne sektion fokuserer på en informationswebsite med avancerede animationseffekter',
    href: './information_website',
  },
  {
    name: 'Tredje Prototype',
    description: 'CSS-animation',
    imageAlt: 'Denne sektion udforsker anvendelsen af CSS-animation til at skabe forskellige animationseffekter.',
    href: './pages/css_animation',
  },
];


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full py-16 sm:py-24 lg:py-32">
          <h2 className="text-4xl font-bold text-gray-900">Welcome to react animation demonstration</h2>
          <p className="text-base text-gray-900">
            Denne blogserie dækker tre sektioner, der hver fokuserer på forskellige aspekter af at skabe animerede webapplikationer ved hjælp af React. I alle sektioner anvendes Tailwind som framework for at sikre brugervenlighed og enkelhed i prototypen.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative flex flex-col drop-shadow">
                <div className="relative flex-1 h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                  <h2 className="text-1xl ml-3 mt-4 font-semibold text-gray-900">{callout.name}</h2>
                  <p className="text-base ml-3 text-gray-900">{callout.description}</p>
                  
                  <h3 className="my-6 ml-3 text-sm text-gray-500">
                    <Link href={callout.href}>
                      <p>
                        <span className="absolute inset-0" />
                        {callout.imageAlt}
                      </p>
                    </Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}