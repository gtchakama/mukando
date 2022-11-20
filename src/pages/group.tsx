import * as React from 'react';

import Layout from '@/components/layout/Layout';

import Seo from '@/components/Seo';


export default function GroupPage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <section className="dark:bg-gray-800 dark:text-gray-100 ">


        <section class="bg-gray-50 dark:bg-gray-900">
          <div class="flex items-center justify-center px-6 py-8 mx-auto space-x-4 text-center h-screen lg:py-0">

            <a rel="noopener noreferrer" href="/mygroup" class="w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-8">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Group 1
                </h1>

              </div>
            </a>


            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-8">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Group 2
                </h1>

              </div>
            </div>


            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mb-8">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Group 3
                </h1>

              </div>
            </div>
          </div>
        </section>


      </section>
    </Layout >
  );
}
