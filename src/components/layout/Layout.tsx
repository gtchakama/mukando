import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2 text-2xl">
          MUKANDO
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a rel="noopener noreferrer" href="signup" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">About</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Groups</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQs</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Contact Us</a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <a rel="noopener noreferrer" href="/signup" className="self-center px-8 py-3 rounded">Sign up</a>
          <a rel="noopener noreferrer" href="/login" className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Login</a>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>{children}</>;
}
