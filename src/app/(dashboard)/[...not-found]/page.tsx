import { Loading } from "@/components/Auth/loading";

export const metadata = {
  title: "404 error || ",
};
const index = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loading />
      <h1 className="text-4xl font-bold">Dafuq you going</h1>
    </div>
  );
};

export default index;
