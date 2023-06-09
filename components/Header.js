import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20  flex flex-col items-center w-full">
      <div className="w-12 h-12 rounded-full mb-4 bg-gradient-to-r from-blue-500 to-teal-500 mt-8  " />
      <Link href="/">
        <a className="text-2xl text-center text-black dark:text-white mb-4">{name}</a>
      </Link>
      <div className="flex justify-center  p-5 rounded-lg  gap-x-5 fixed top-0 left-1/2 transform -translate-x-1/2 space-x-8">
        <a href="/reap.zip" download className="flex items-center  text-gray-800 text-lg tooltip" data-tooltip="Prosjektskisse, Prosjektbeskrivelse og milepælpresentasjoner">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className="w-6 h-6 stroke-black dark:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />

          </svg><p className="ml-2 dark:text-white">Last ned vedlegg</p>

        </a>
        <a href="https://github.com/bergepro/reap" className="flex items-center   text-lg space-x-4">
          <svg className="dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <p> Link til repo</p>

        </a>
        <a href="https://reaptime.herokuapp.com" className="flex items-center gap-x-5 ">
        <svg class="svg-icon" width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M257.563 25.156c353.16 276.87 16.918 408.895-87.875 293.25l-40.75 37.125 50.812 50.345c217.562 181.363 524.73-252.058 77.813-380.72zM110.75 364.28c-5.525 1.065-8.975 2.957-11.313 5.25-1.956 1.922-3.248 4.556-4.25 7.564l55.188 52.844c5.468-1.008 9.264-2.796 11.28-4.688 1.997-1.872 3.095-3.864 3.095-7.53l-54-53.44zm-24.72 30.314L30.407 445.28C13.67 472.28 45.1 506.478 81.5 489.94l51.53-50.282-47-45.062z" />
        </svg>
        <p>Reap Time Tracking</p></a>
      </div>
      <style jsx>{`
.tooltip {
  position: relative;
}
.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: .5em;
  border-radius: .3em;
  font-size: .8em;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s ease-in-out;
}
.tooltip:hover::after {
  opacity: 1;
}
`}</style>
    </header>
  );
}
