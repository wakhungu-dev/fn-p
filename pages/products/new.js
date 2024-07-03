import Product from "@/components/Product";

export default function NewProduct() {
  return (
    <div className="py-3">
      <div className="text-center sm:text-left">
        <p className="mt-1.5 text-md text-gray-500 max-w-lg">
          Let's create a new product. 🎉
        </p>
      </div>

      <hr className="h-px border-0 bg-gray-300 my-4" />
      
      <div className="my-10">
        <Product />
      </div>
    </div>
  );
}
