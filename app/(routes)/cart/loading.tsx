import { Skeleton } from "@/components/ui/skeleton";

const CartLoading = () => {
  return (
    <div className="w-full h-full p-8">
      <div className="mx-auto px-4 py-10 sm:px-6 max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Skeleton className="rounded-xl aspect-square" />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Skeleton className="rounded-xl aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLoading;
