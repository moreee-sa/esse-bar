function HomeImage() {
  return (
    <div className="w-full h-full">
      <div className="absolute inset-0 bg-black/40" />
      <img
        src="image/coffee_1.webp"
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}

export default HomeImage