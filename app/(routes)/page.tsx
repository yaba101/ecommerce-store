import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("clryuw8av0002vos9n6q5kb2b");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
