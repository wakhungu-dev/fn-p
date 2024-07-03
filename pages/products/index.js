import Link from "next/link";

export default function products(){
    return (
        <div>
          <header>
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">All products</h1>
          
                  <p className="mt-1.5 text-md text-gray-500 max-w-lg">let's create a new product. 🎉</p>
                </div>
          
                <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                  <Link
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-green-200 px-5 py-3 text-green-700 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                    href={'/products/new'}
                  >
                    <span className="text-md font-medium"> Create products </span>
          
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  </Link>
          
                 
                </div>
              </div>
            </div>
          </header>
          
          <hr class="my-1 h-px border-0 bg-gray-300" />
          <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
            no products found
        </div>
        </div>
    )
}