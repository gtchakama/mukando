import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Seo from '@/components/Seo';

export default function MyGroupPage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <body class='flex min-h-screen bg-gray-100'>
        <aside class='hidden sm:flex sm:flex-col'>
          <a
            href='#'
            class='inline-flex h-20 w-20 items-center justify-center bg-purple-600 hover:bg-purple-500 focus:bg-purple-500'
          >
            {'🍀'}
          </a>
          <div class='flex flex-grow flex-col justify-between bg-gray-800 text-gray-500'>
            <nav class='mx-4 my-6 flex flex-col space-y-4'>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-lg py-3 hover:bg-gray-700 hover:text-gray-400 focus:bg-gray-700 focus:text-gray-400'
              >
                <span class='sr-only'>Folders</span>
                <svg
                  aria-hidden='true'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                  />
                </svg>
              </a>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-lg bg-white py-3 text-purple-600'
              >
                <span class='sr-only'>Dashboard</span>
                <svg
                  aria-hidden='true'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  />
                </svg>
              </a>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-lg py-3 hover:bg-gray-700 hover:text-gray-400 focus:bg-gray-700 focus:text-gray-400'
              >
                <span class='sr-only'>Messages</span>
                <svg
                  aria-hidden='true'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </a>
              <a
                href='#'
                class='inline-flex items-center justify-center rounded-lg py-3 hover:bg-gray-700 hover:text-gray-400 focus:bg-gray-700 focus:text-gray-400'
              >
                <span class='sr-only'>Documents</span>
                <svg
                  aria-hidden='true'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                  />
                </svg>
              </a>
            </nav>
            <div class='inline-flex h-20 w-20 items-center justify-center border-t border-gray-700'>
              <button class='rounded-lg p-3 hover:bg-gray-700 hover:text-gray-400 focus:bg-gray-700 focus:text-gray-400'>
                <span class='sr-only'>Settings</span>
                <svg
                  aria-hidden='true'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  class='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </aside>
        <div class='flex-grow text-gray-800'>
          <header class='flex h-20 items-center bg-white px-6 sm:px-10'>
            <button class='relative mr-2 block flex-shrink-0 rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 sm:hidden'>
              <span class='sr-only'>Menu</span>
              <svg
                aria-hidden='true'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                class='h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </button>
            <div class='relative w-full max-w-md sm:-ml-2'>
              <svg
                aria-hidden='true'
                viewBox='0 0 20 20'
                fill='currentColor'
                class='absolute mt-2.5 ml-2 h-6 w-6 text-gray-400'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clip-rule='evenodd'
                />
              </svg>
              <input
                type='text'
                role='search'
                placeholder='Search...'
                class='w-full rounded-lg border-4 border-transparent py-2 pl-10 pr-4 placeholder-gray-400 focus:bg-gray-50'
              />
            </div>
            <div class='ml-auto flex flex-shrink-0 items-center'>
              <button class='inline-flex items-center rounded-lg p-2 hover:bg-gray-100 focus:bg-gray-100'>
                <span class='sr-only'>User Menu</span>
                <div class='hidden md:flex md:flex-col md:items-end md:leading-tight'>
                  <span class='font-semibold'>Grace Simmons</span>
                  <span class='text-sm text-gray-600'>Group Leader</span>
                </div>
                <span class='ml-2 mr-2 h-12 w-12 overflow-hidden rounded-full bg-gray-100 sm:ml-3'>
                  <img
                    src='https://randomuser.me/api/portraits/women/68.jpg'
                    alt='user profile photo'
                    class='h-full w-full object-cover'
                  />
                </span>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  class='hidden h-6 w-6 text-gray-300 sm:block'
                >
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
              </button>
              <div class='ml-3 space-x-1 border-l pl-3'>
                <button class='relative rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600'>
                  <span class='sr-only'>Notifications</span>
                  <span class='absolute top-0 right-0 mt-1 mr-2 h-2 w-2 rounded-full bg-red-500'></span>
                  <span class='absolute top-0 right-0 mt-1 mr-2 h-2 w-2 animate-ping rounded-full bg-red-500'></span>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>
                <button class='relative rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600'>
                  <span class='sr-only'>Log out</span>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <main class='space-y-6 p-6 sm:p-10'>
            <div class='flex flex-col justify-between space-y-6 md:flex-row md:space-y-0'>
              <div class='mr-6'>
                <h1 class='mb-2 text-4xl font-semibold'>Dashboard</h1>
                <h2 class='ml-0.5 text-gray-600'>Mukando</h2>
              </div>
              <div class='-mb-3 flex flex-wrap items-start justify-end'>
                <button class='mb-3 inline-flex rounded-md border border-purple-600 px-5 py-3 text-purple-600 hover:bg-purple-100 hover:text-purple-700 focus:bg-purple-100 focus:text-purple-700'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='-ml-1 mt-0.5 mr-2 h-5 w-5 flex-shrink-0'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                    />
                  </svg>
                  Manage Group
                </button>
                <button class='ml-6 mb-3 inline-flex rounded-md bg-purple-600 px-5 py-3 text-white hover:bg-purple-700 focus:bg-purple-700'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='-ml-1 mr-2 h-6 w-6 flex-shrink-0 text-white'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                  Create new group
                </button>
              </div>
            </div>
            <section class='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
              <div class='flex items-center rounded-lg bg-white p-8 shadow'>
                <div class='mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <div>
                  <span class='block text-2xl font-bold'>62</span>
                  <span class='block text-gray-500'>Members</span>
                </div>
              </div>
              <div class='flex items-center rounded-lg bg-white p-8 shadow'>
                <div class='mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                    />
                  </svg>
                </div>
                <div>
                  <span class='block text-2xl font-bold'>6</span>
                  <span class='block text-gray-500'>Online</span>
                </div>
              </div>
              <div class='flex items-center rounded-lg bg-white p-8 shadow'>
                <div class='mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6'
                    />
                  </svg>
                </div>
                <div>
                  <span class='inline-block text-2xl font-bold'>9</span>
                  <span class='inline-block text-xl font-semibold text-gray-500'>
                    (14%)
                  </span>
                  <span class='block text-gray-500'>Currency Rate</span>
                </div>
              </div>
              <div class='flex items-center rounded-lg bg-white p-8 shadow'>
                <div class='mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                    />
                  </svg>
                </div>
                <div>
                  <span class='block text-2xl font-bold'>83%</span>
                  <span class='block text-gray-500'>Collected</span>
                </div>
              </div>
            </section>
            <section class='grid gap-6 md:grid-cols-2 xl:grid-flow-col xl:grid-cols-4 xl:grid-rows-3'>
              <div class='flex flex-col rounded-lg bg-white shadow md:col-span-2 md:row-span-2'>
                <div class='border-b border-gray-100 px-6 py-5 font-semibold'>
                  The number of applied and left members per month
                </div>
                <div class='flex-grow p-4'>
                  <div class='flex h-full items-center justify-center rounded-md border-2 border-dashed border-gray-200 bg-gray-100 px-4 py-16 text-3xl font-semibold text-gray-400'>
                    Chart
                  </div>
                </div>
              </div>
              <div class='flex items-center rounded-lg bg-white p-8 shadow'>
                <div class='mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path fill='#fff' d='M12 14l9-5-9-5-9 5 9 5z' />
                    <path
                      fill='#fff'
                      d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                    />
                  </svg>
                </div>
                <div>
                  <span class='block text-2xl font-bold'>25</span>
                  <span class='block text-gray-500'>Members Paid</span>
                </div>
              </div>
              <div class='flex items-center rounded-lg bg-white p-8 shadow'>
                <div class='mr-6 inline-flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600'>
                  <svg
                    aria-hidden='true'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    class='h-6 w-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <span class='block text-2xl font-bold'>139</span>
                  <span class='block text-gray-500'>-- -- --</span>
                </div>
              </div>
              <div class='row-span-3 rounded-lg bg-white shadow'>
                <div class='flex items-center justify-between border-b border-gray-100 px-6 py-5 font-semibold'>
                  <span>Members</span>
                  <button
                    type='button'
                    class='-mr-1 inline-flex justify-center rounded-md bg-white px-1 text-sm font-medium leading-5 text-gray-500 hover:text-gray-600'
                    id='options-menu'
                    aria-haspopup='true'
                    aria-expanded='true'
                  >
                    Descending
                    <svg
                      class='-mr-1 ml-1 h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clip-rule='evenodd'
                      />
                    </svg>
                  </button>
                  {/* <!-- Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns --> */}
                </div>
                <div class='overflow-y-auto' style={{ maxHeight: '24rem' }}>
                  <ul class='space-y-6 p-6'>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/women/82.jpg'
                          alt='Annette Watson profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Annette Watson</span>
                      <span class='ml-auto font-semibold'>9.3</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/men/81.jpg'
                          alt='Calvin Steward profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Calvin Steward</span>
                      <span class='ml-auto font-semibold'>8.9</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/men/80.jpg'
                          alt='Ralph Richards profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Ralph Richards</span>
                      <span class='ml-auto font-semibold'>8.7</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/men/79.jpg'
                          alt='Bernard Murphy profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Bernard Murphy</span>
                      <span class='ml-auto font-semibold'>8.2</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/women/78.jpg'
                          alt='Arlene Robertson profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Arlene Robertson</span>
                      <span class='ml-auto font-semibold'>8.2</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/women/77.jpg'
                          alt='Jane Lane profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Jane Lane</span>
                      <span class='ml-auto font-semibold'>8.1</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/men/76.jpg'
                          alt='Pat Mckinney profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Pat Mckinney</span>
                      <span class='ml-auto font-semibold'>7.9</span>
                    </li>
                    <li class='flex items-center'>
                      <div class='mr-3 h-10 w-10 overflow-hidden rounded-full bg-gray-100'>
                        <img
                          src='https://randomuser.me/api/portraits/men/75.jpg'
                          alt='Norman Walters profile picture'
                        />
                      </div>
                      <span class='text-gray-600'>Norman Walters</span>
                      <span class='ml-auto font-semibold'>7.7</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='row-span-3 flex flex-col rounded-lg bg-white shadow'>
                <div class='border-b border-gray-100 px-6 py-5 font-semibold'>
                  Members Activity
                </div>
                <div class='flex-grow p-4'>
                  <div class='flex h-full items-center justify-center rounded-md border-2 border-dashed border-gray-200 bg-gray-100 px-4 py-24 text-3xl font-semibold text-gray-400'>
                    Chart
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </body>
    </Layout>
  );
}
