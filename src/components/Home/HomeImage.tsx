function HomeImage() {
  return (
    <div className="w-full h-screen">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
      <img
        src="image/coffee_1.webp"
        alt=""
        className="w-full h-full object-cover object-top"
        fetchPriority={"high"}
      />
    </div>
  );
}

export default HomeImage