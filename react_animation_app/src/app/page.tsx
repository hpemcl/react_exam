import Link from 'next/link';
import Image from 'next/image';

const callouts = [
  {
    name: 'Første Prototype',
    description: 'One-page Application med React-Reveal',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Denne sektion handler om oprettelse af en one-page applikation, typisk brugt til porteføljer eller præsentationer af kunstnere eller bands. ',
    href: '/one-page',
  },
  {
    name: 'Anden Prototype',
    description: 'Informationswebsite med React Spring',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Denne sektion fokuserer på en informationswebsite med avancerede animationseffekter',
    href: '/information-website',
  },
  {
    name: 'Tredje Prototype',
    description: 'CSS-animation',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Denne sektion udforsker anvendelsen af CSS-animation til at skabe forskellige animationseffekter.',
    href: '/css-animation',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full py-16 sm:py-24 lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative flex flex-col">
                <div className="relative flex-1 h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64">
                <p className="text-base text-gray-900">{callout.imageAlt}</p>
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={callout.href} legacyBehavior>
                    <a>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
