import getBillboard from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("clqu4vg5300017x9t8xrte94c");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
