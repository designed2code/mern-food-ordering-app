import { Button } from "./ui/button";

type Props = {};

const MainNav = ({}: Props) => {
  return (
    <>
      <Button
        variant={"ghost"}
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button>
    </>
  );
};

export default MainNav;
