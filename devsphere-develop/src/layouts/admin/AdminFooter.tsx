import csxLogo from "@src/assets/logos/csx_logo.png";

const AdminFooter = () => {
  return (
    <footer className="absolute bottom-0 flex justify-center items-center w-full gap-2 py-4">
      <img alt="logo" className="h-6" src={csxLogo}></img>
      <small className="font-bold text-gray-600">
        Copyright © 2024. All rights reserved.
      </small>
    </footer>
  );
};

export default AdminFooter;
