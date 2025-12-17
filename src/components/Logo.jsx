function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="text-xl font-semibold"> Movie DB</span>
      <span className="hidden sm:inline text-gray-500">Search & Details</span>
    </Link>
  );
}

export default Logo;
