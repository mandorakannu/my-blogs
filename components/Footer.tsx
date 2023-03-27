export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <h6 className="text-center bg-red-400 text-white py-4 pointer-events-none border-t border-red-800">
        &copy; {year} by Kannu Mandora. All right reserved.
      </h6>
    </>
  );
}
